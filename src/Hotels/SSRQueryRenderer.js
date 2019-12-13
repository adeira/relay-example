// @flow

import * as React from 'react';
import {
  QueryRenderer,
  type GraphQLTaggedNode,
  getRequest,
  createOperationDescriptor,
  RelayEnvironmentProvider,
} from '@adeira/relay';
import { isBrowser } from '@adeira/js';

import createRelayEnvironment from '../createRelayEnvironment';

type RendererProps = {| +[key: string]: any |};

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { [name: string]: mixed, ... },
  +onResponse: (?RendererProps) => React.Node,
  +ssrData: $FlowFixMe,
|};

export default function SSRQueryRenderer(props: Props) {
  // We have to re-create the environment here with initialized store for SSR.
  const environment = createRelayEnvironment(props.ssrData);

  if (!isBrowser() && props.ssrData != null) {
    // When we get here on the server, we have already fetched data
    // Using the QueryRenderer will dispatch a new request to BE from the server, so just return
    // The data from the store instead.
    const request = getRequest(props.query);
    const operation = createOperationDescriptor(request, props.variables);

    const res = environment.lookup(operation.fragment);
    const data = res.data;

    return (
      <RelayEnvironmentProvider environment={environment}>
        {data != null ? props.onResponse(data) : <div>lol loading...</div>}
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
