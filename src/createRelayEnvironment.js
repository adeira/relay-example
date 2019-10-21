// @flow

import {
  createEnvironment,
  createNetworkFetcher,
  type Environment,
  type RecordMap,
} from '@kiwicom/relay';

export default function createRelayEnvironment(initialData: ?RecordMap): Environment {
  const resource = 'https://graphql.kiwi.com';
  const fetchFn = createNetworkFetcher(resource, {
    'X-Client': 'https://github.com/kiwicom/relay-example',
  });

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
