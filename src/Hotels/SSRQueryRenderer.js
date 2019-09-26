// @flow

import * as React from 'react';
import { QueryRenderer, type GraphQLTaggedNode } from '@kiwicom/relay';
import fetch from '@kiwicom/fetch';
import {
  Environment as RelayEnvironment,
  Network,
  RecordSource,
  Store,
  createOperationDescriptor,
  getRequest,
} from 'relay-runtime';
// I know you don't want us to use this package, but for now we have to, to make SSR work I think.
// We should proabably extend kiwicom/relay with some functionality to do this

type RendererProps = {| +[key: string]: any |};

type Props = {|
  +query: GraphQLTaggedNode,
  +variables: { [name: string]: mixed, ... },
  +onResponse: (?RendererProps) => React.Node,
  +ssrData: $FlowFixMe,
|};

export const createRelayEnvironment = (initialData: ?{ ... }) => {
  const store = new Store(new RecordSource(initialData));
  const fetchFn = async (operation, variables) => {
    const res = await fetch('https://graphql.kiwi.com/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    });
    const data = await res.json();

    return data;
  };

  const network = Network.create(fetchFn);
  const env = new RelayEnvironment({
    network,
    store,
  });

  return env;
};

export default function SSRQueryRenderer(props: Props) {
  const environment = createRelayEnvironment(props.ssrData);

  const getSSRData = () => {
    if (typeof window === 'undefined') {
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

    return <div>loading...</div>;
  }

  return (
    <QueryRenderer
      environment={environment}
      query={props.query}
      clientID="relay-example"
      variables={props.variables}
      render={render}
      fetchPolicy="store-and-network"
    />
  );
}
