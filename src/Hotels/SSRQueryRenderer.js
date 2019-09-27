// @flow

import * as React from 'react';
import { QueryRenderer, type GraphQLTaggedNode } from '@kiwicom/relay';
import { createOperationDescriptor, getRequest } from 'relay-runtime';

// I know you don't want us to use this package, but for now we have to, to make SSR work I think.
// We should probably extend @kiwicom/relay with some functionality to do this.

import createRelayEnvironment from '../createRelayEnvironment';
import isBrowser from '../isBrowser';

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

  const getSSRData = () => {
    if (!isBrowser) {
      const store = environment.getStore();
      const operation = createOperationDescriptor(getRequest(props.query), props.variables);
      return store.lookup(operation.root);
    }
    return null;
  };

  const ssrData = getSSRData();
  function render({ props: rendererProps }) {
    const data = rendererProps ?? ssrData?.data;
    if (data) {
      return props.onResponse(data);
    }
    return <div>Loading...</div>;
  }

  return (
    <QueryRenderer
      environment={environment}
      query={props.query}
      variables={props.variables}
      render={render}
      fetchPolicy="store-and-network" // this effectively sends second identical query which is probably unnecessary
    />
  );
}
