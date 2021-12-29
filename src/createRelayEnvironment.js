// @flow

import {
  createEnvironment,
  createNetworkFetcher,
  type Environment,
  type RecordMap,
} from '@adeira/relay';

export default function createRelayEnvironment(initialData: ?RecordMap): Environment {
  const resource = __DEV__
    ? 'http://localhost:3000/api/graphql'
    : 'https://relay-example.vercel.app/api/graphql';
  const fetchFn = createNetworkFetcher(resource, {
    'X-Client': 'https://github.com/adeira/relay-example',
  });

  return createEnvironment({
    fetchFn,
    records: initialData,
  });
}
