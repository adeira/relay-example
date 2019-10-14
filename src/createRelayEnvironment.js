// @flow

import { createEnvironment, type Environment, type RecordMap } from '@kiwicom/relay';
import fetchWithRetries from '@kiwicom/fetch';

import queryMap from '../persisted-queries.json';

export default function createRelayEnvironment(initialData: ?RecordMap): Environment {
  const resource = 'https://graphql.kiwi.com';

  // THIS IS ONLY FOR DEMO PURPOSES! Normally, we'd use 'createNetworkFetcher' from '@kiwicom/relay'.
  // However, we need to get the query map here manually since we are not persisting it to the server.
  // TODO: This won't be needed once we replace the remote server with our in-memory implementation.
  const fetchFn = (request, variables) => {
    return fetchWithRetries(resource, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query: queryMap[request.id],
        variables,
      }),
    }).then(response => response.json());
  };

  const graphiQLPrinter = (request, variables) => {
    return `${resource}/?query=${encodeURIComponent(request.text)}&variables=${encodeURIComponent(
      JSON.stringify(variables),
    )}`;
  };

  return createEnvironment({
    fetchFn,
    graphiQLPrinter,
    records: initialData,
  });
}
