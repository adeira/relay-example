# Relay examples

This repository contains examples of common patterns used in real-world applications so you don't have to re-invent the wheel every time. It currently contains following examples:

- `@kiwicom/relay` package usage
- simple fetching using `createFragmentContainer`
- bi-directional (also known as window) pagination using `createRefetchContainer`
- _"load more"_ pagination using `createRefetchContainer`
- _"load more"_ pagination using `createPaginationContainer`

# Install and run

```text
yarn install
yarn start
```

You should regenerate Relay files in case you are changing Relay fragments:

```text
yarn relay
```

This is necessary because Relay is not working with the GraphQL code you write directly. Instead, it generates optimized metafiles to the `__generated__` folder and it's working with these files. It's a good idea to check what files are being regenerated and sometimes even look inside and read them. You'll eventually learn a lot about how it actually works and what optimizations are actually being done.

# Bi-directional pagination

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
  page: allLocations(
    first: 1
    after: "YXJyYXljb25uZWN0aW9uOjI="
    last: null
    before: null
  ) {
    edges {
      node {
        name
      }
    }
  }
}
```

This query returns 5 results and let'say the middle one has ID `YXJyYXljb25uZWN0aW9uOjI=`. To get page after this page you have to query it with `first/after` combo. To get previous page you have to use `last/before` combo. It can be a bit burdensome to work with the cursor manually so you can also use `pageInfo` field (that's exactly how it works in our Relay example).

Check `/pages/locations/LocationsPaginatedBidirectional.js` for the implementation.

# Load more pagination

Load more pagination works almost exactly the same but there are two important differences:

- we paginate only forward (or backwards) and only loading new records
- old records are not being updated because new records are only appended (or prepended)

To do this we can easily use `createRefetchContainer` as well and just annotate the fragment with `@connection` directive. This annotation implements cursor based pagination automatically (best practice in GraphQL these days) and it merges the edges from subsequent fetches into the store after the previous edges. This is exactly what we need for the _"load more"_ feature.

There is also `createPaginationContainer` which simplifies this one particular flow so you don't have to manage `pageInfo` manually. The difference is minimal and all the containers are to some extend interchangeable.

Check these examples for the actual implementation:

- `/pages/locations/LocationsPaginated.js`
- `/pages/locations/LocationsPaginatedRefetch.js`
