// @flow

import { createEnvironment, createNetworkFetcher } from '@kiwicom/relay';

module.exports = createEnvironment({
  fetcherFn: createNetworkFetcher('https://graphql.kiwi.com'),
});
