// @flow

import * as React from 'react';
import { QueryRenderer, type GraphQLTaggedNode, RelayEnvironmentProvider } from '@adeira/relay';
import { isBrowser } from '@adeira/js';
import { getDataFromRequest } from '@adeira/relay-utils';
import type { Variables } from '@adeira/relay-runtime';

import createRelayEnvironment from './createRelayEnvironment';

type Props<T> = {|
  +query: GraphQLTaggedNode,
  +variables: Variables,
  +onResponse: (?T) => React.Node,
  +ssrData: $FlowFixMe,
|};

export default function SSRQueryRenderer<T>(props: Props<T>) {
  // We have to re-create the environment here with initialized store for SSR.
  const environment = createRelayEnvironment(props.ssrData);

  if (!isBrowser() && props.ssrData != null) {
    // When we get here on the server, we have already fetched data
    // Using the QueryRenderer will dispatch a new request to BE from the server, so just return
    // The data from the store instead.
    const data = getDataFromRequest(
      { query: props.query, variables: props.variables },
      environment,
    );

    return (
      <RelayEnvironmentProvider environment={environment}>
        {/* // $FlowFixMe errors after upgrading to relay 9.1.0 */}
        {data != null ? props.onResponse(data) : <div>loading...</div>}
      </RelayEnvironmentProvider>
    );
  }

  return (
    <QueryRenderer
      environment={environment}
      query={props.query}
      variables={props.variables}
      onResponse={props.onResponse}
      fetchPolicy="store-and-network" // this effectively sends second identical query which is probably unnecessary
    />
  );
}
