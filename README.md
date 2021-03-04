_This project was initially developed at Kiwi.com for education purposes and was agreed upon developing it further outside of this company._

[![Continuous Integration](https://github.com/adeira/relay-example/workflows/Continuous%20Integration/badge.svg)](https://github.com/adeira/relay-example/actions?query=workflow%3A%22Continuous+Integration%22)

# Relay examples

This repository contains examples of common patterns used in real-world applications, so you don't have to re-invent the wheel every time. It currently contains following examples:

- [`@adeira/relay`](https://www.npmjs.com/package/@adeira/relay) package usage
- simple fetching using `useFragment` hook API
- bi-directional pagination using `createRefetchContainer` (also known as window pagination)
- _"load more"_ pagination using `createRefetchContainer` AND `createPaginationContainer`
- query polling (live queries) with simple A/B test
- example of local schema via `commitLocalUpdate` with local storage
- server side rendering

Additional learning resources:

- official documentation: https://relay.dev/docs/en/introduction-to-relay
- advanced and experimental features: https://mrtnzlml.com/docs/relay
- source-code: https://github.com/facebook/relay

# Install and run

```text
yarn install
yarn start
```

You should regenerate Relay files in case you are changing Relay fragments:

```text
yarn relay
```

This is necessary because Relay is not working with the GraphQL code you write directly. Instead, it generates optimized metafiles to the `__generated__` folder, and it's working with these files. It's a good idea to check what files are being regenerated and sometimes even look inside and read them. You'll eventually learn a lot about how it actually works and what optimizations are actually being done.

Run this command to get fresh GraphQL schema:

```text
yarn schema
```

# Using `@adeira/relay`

[Docs](https://github.com/adeira/universe/tree/master/src/relay)

We use `@adeira/relay` internally to help with some difficult Relay tasks and to share knowledge via code across all our teams. It exposes high-level API very similar to Facebook Relay. The key element is so-called Query Renderer. This renderer expects root query which will be automatically fetched and function to call (with the new data) to render some UI:

```js
import * as React from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';
import type { AppQueryResponse } from '__generated__/AppQuery.graphql';

function handleResponse(props: AppQueryResponse) {
  const edges = props.allLocations?.edges ?? [];
  return (
    <ol>
      {edges.map((edge) => (
        <li key={edge?.node?.id}>{edge?.node?.name}</li>
      ))}
    </ol>
  );
}

export default function App(props) {
  return (
    <QueryRenderer
      query={graphql`
        query AppQuery {
          allLocations(first: 20) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      `}
      onResponse={handleResponse}
    />
  );
}
```

The package `@adeira/relay` exposes correct Flow types, so you can just require it and use it. There are other key elements helping us to build the applications well: `@adeira/eslint-config` and `@adeira/babel-preset-adeira`. The eslint config prevents you from using Relay incorrectly, and the Babel preset helps us to write modern JS including the `graphql ...` syntax and using optional chain (`a?.b`) which is very common in our applications.

# Fragment compositions

[Relay docs](https://relay.dev/docs/en/fragment-container)

It is correct to write the whole query into Query Renderer. However, as application grows it's necessary to decompose the root application component into smaller parts. Relay copies React components _exactly_ so when you write new component then you should specify there data requirements as well. This is how we could refactor the previous example - first, let's move the whole query into separate component using `useFragment` hook:

```js
import { graphql, useFragment } from '@adeira/relay';

export default function AllLocations(props) {
  const data = useFragment(
    graphql`
      fragment AllLocations on RootQuery
        allLocations(first: 20) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    props.data,
  );

  // TODO: move the React code here (iterate `data` variable)
}
```

Please note: you could decompose it on many levels and it all depends on your needs and experience where to cut the line. This is handy for the future steps around pagination but otherwise it would be OK to just decompose the single location with `id` and `name`.

Now, we have to modify the original application to use our new component:

```js
import * as React from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';
import type { AppQueryResponse } from '__generated__/AppQuery.graphql';

import AllLocations from './AllLocations';

function handleResponse(props: AppQueryResponse) {
  return <AllLocations data={props} />;
}

export default function App(props) {
  return (
    <QueryRenderer
      query={graphql`
        query AppQuery {
          ...AllLocations
        }
      `}
      onResponse={handleResponse}
    />
  );
}
```

And that's it - we have two components and they describe what data they need exactly. Our first component needs to iterate all locations and requires `id` and `name`. Our second component requires data for `AllLocations` but doesn't care more about what data is it actually. This is very important concept in Relay and in GraphQL in general: _always describe what you need in the component itself_. It is important because it's 1) very explicit and you can be sure that you are not gonna break anything when refactoring the component and 2) you can easily use the component somewhere and just spread the requirements using `...AllLocations`. This is crucial for composing UI from many many React components.

[![Watch the video](https://img.youtube.com/vi/yUhl6A5T7fQ/sddefault.jpg)](https://youtu.be/yUhl6A5T7fQ)

# Bi-directional pagination

[Relay docs](https://facebook.github.io/relay/docs/en/refetch-container.html)

The best fit for bi-directional (sometimes known as "window" or "next/prev" pagination) is `createRefetchContainer`. This container is the best when you are changing variables in the component fragment (which is exactly our use-case). Pagination in GraphQL world works like this (try in https://graphql.kiwi.com/):

```graphql
{
  allLocations(first: 5) {
    edges {
      cursor
      node {
        name
      }
    }
  }
  page: allLocations(first: 1, after: "YXJyYXljb25uZWN0aW9uOjI=", last: null, before: null) {
    edges {
      node {
        name
      }
    }
  }
}
```

This query returns 5 results and let's say the middle one has ID `YXJyYXljb25uZWN0aW9uOjI=`. To get page after this page you have to query it with `first/after` combo. To get a previous page you have to use `last/before` combo. It can be a bit burdensome to work with the cursor manually, so you can also use `pageInfo` field (that's exactly how it works in our Relay example). There are only few steps you have to do in order to make it work in Relay:

1. Export component using `createRefetchContainer`. This component accepts the raw React component as a first argument, regular GraphQL fragment as a second argument (start with the same fragment as from the `useFragment` hook) and last argument is a query which is going to be called during the refetch.
2. Describe what variables your fragment needs using `@argumentDefinitions(argName: { type: "Int!", defaultValue: null })`.
3. Pass down all the variables from the query to the fragment using `@arguments(argName: $argName)` and finally:
4. Call `props.relay.refetch` with the variables necessary for the refetch query.

Tip: you don't have to specify the `defaultValue` in arguments definition. It can be a bit difficult because GraphQL strings cannot contain string substitutions. It's a good idea to pass it down from the parent component using `@arguments` just like you do in the refetch query.

Check [`LocationsPaginatedBidirectional.js`](src/locations/LocationsPaginatedBidirectional.js) for the implementation.

[![Watch the video](https://img.youtube.com/vi/jZeIcR-1yVA/sddefault.jpg)](https://youtu.be/jZeIcR-1yVA)

# Load more pagination

[Relay docs](https://facebook.github.io/relay/docs/en/pagination-container.html)

Load more pagination works almost exactly the same but there are two important differences:

- we paginate only forward (or backwards) and only loading new records
- old records are not being updated because new records are only appended (or prepended)

To do this we can easily use `createRefetchContainer` as well and just annotate the fragment with `@connection` directive. This annotation implements cursor based pagination automatically (best practice in GraphQL these days) and it merges the edges from subsequent fetches into the store after the previous edges. This is exactly what we need for the _"load more"_ feature.

There is also `createPaginationContainer` which simplifies this one particular flow so you don't have to manage `pageInfo` manually. The difference is minimal and all the containers are to some extend interchangeable. These steps are necessary in order to make the `createPaginationContainer` work:

1. Export component using `createPaginationContainer` with standard API: first argument is the raw React component and second argument is a fragment.
2. Add object to the 3rd argument with two fields: refetch `query` and `getVariables` which is a function to get the variables for this query.
3. Annotate the fragment with `@argumentDefinitions` and refetch query with `@arguments`.
4. And lastly add `@connection(key: " ... ")` to the fragment to signify that we want to append the records and not replace them.

Check these examples for the actual implementation:

- [`LocationsPaginated.js`](src/locations/LocationsPaginated.js)
- [`LocationsPaginatedRefetch.js`](src/locations/LocationsPaginatedRefetch.js)

[![Watch the video](https://img.youtube.com/vi/otivgvB6m9A/sddefault.jpg)](https://youtu.be/otivgvB6m9A)

# Query polling

Relay supports subscriptions and experimental live queries via polling to allow modifications to the store whenever a payload is received. Query polling is a simple (but very powerful) way how to achieve live data updates without any change to infrastructure or complicated changes to your code. All you need to do is to instruct your query renderer to update Relay cache every few seconds using `cacheConfig.poll`:

```js
import React from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';

export default function Polling() {
  return (
    <QueryRenderer
      query={graphql`
        query PollingQuery {
          currency(code: "czk") {
            code
            rate
          }
        }
      `}
      cacheConfig={{
        poll: 5000, // update UI every 5 seconds
      }}
      onResponse={(data) => {
        // this callback is gonna be called every time your data change
        console.log(data);
      }}
    />
  );
}
```

This is preferable solution over subscriptions in many cases because:

- it's extremely simple (we added only one property and it's good to go)
- there is no need to update the server code
- auth works by default correctly since it's the same like query fetching
- it reconnects to the failed server by design
- it doesn't open expensive persistent websockets (and you don't need such an infrastructure)

# Relay mutations basics

_We currently do not have docs or example in this repository. Would you like to contribute?_

[![Watch the video](https://img.youtube.com/vi/g1p9ad_MkNQ/sddefault.jpg)](https://youtu.be/g1p9ad_MkNQ)

# Relay range add mutation

_We currently do not have docs or example in this repository. Would you like to contribute?_

[![Watch the video](https://img.youtube.com/vi/B65fwwiEepE/sddefault.jpg)](https://youtu.be/B65fwwiEepE)

# Relay range delete mutation

_We currently do not have docs or example in this repository. Would you like to contribute?_

[![Watch the video](https://img.youtube.com/vi/dq_dxJaI_g0/sddefault.jpg)](https://youtu.be/dq_dxJaI_g0)

# Relay updater

_We currently do not have docs or example in this repository. Would you like to contribute?_

[![Watch the video](https://img.youtube.com/vi/g3mv9-yEwzk/sddefault.jpg)](https://youtu.be/g3mv9-yEwzk)

# Relay local updates

_We currently do not have example in this repository. Would you like to contribute?_

[Detailed information](https://github.com/mrtnzlml/meta/blob/master/relay.md#local-schema)

Local updates are handy in cases you'd like to extend GraphQL schema provided by server and add some additional fields relevant only for your client application. First, you have to define your local schema in file with extension `*.graphql`. This file must be located somewhere in the scope of Relay Compiler:

```graphql
"""
Extend type: https://graphql.github.io/graphql-spec/draft/#sec-Object-Extensions
"""
extend type Article {
  draft: String!
}

"""
Or add new query: https://github.com/facebook/relay/issues/1656#issuecomment-382461183
"""
extend type Query {
  errors: [Error!]
}

type Error {
  id: ID!
  message: String!
}
```

Now, just use `commitLocalUpdate` from `@adeira/relay` to update the local store:

```js
Relay.commitLocalUpdate(environment, store => {
  const articleID = 'f9496862-4fb7-4a09-bc05-a9a3ce2cb7b3'; // ID of the `Article` type you want to update
  store.get(articleID).setValue('My custom draft text', 'draft');

  // or create new types:
  const root = store.getRoot();
  const errRecord = store.create('ID_1', 'Error');
  errRecord.setValue('ID_1', 'id');
  errRecord.setValue('My custom error message', 'message');
  root.setLinkedRecords([errRecord, ...], 'errors');
});
```

[![Watch the video](https://img.youtube.com/vi/Ei1nlUJ3e2I/sddefault.jpg)](https://youtu.be/Ei1nlUJ3e2I)
