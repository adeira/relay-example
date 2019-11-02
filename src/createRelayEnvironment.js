// @flow

import {
  createEnvironment,
  createNetworkFetcher,
  type Environment,
  type RecordMap,
} from '@adeira/relay';

export default function createRelayEnvironment(initialData: ?RecordMap): Environment {
  const resource = 'https://graphql.kiwi.com';
  const fetchFn = createNetworkFetcher(resource, {
    'X-Client': 'https://github.com/adeira/relay-example',
  });

  return createEnvironment({
    fetchFn,
    records: initialData,
  });
}
