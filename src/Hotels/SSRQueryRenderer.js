// @flow

import * as React from 'react';
import { QueryRenderer, type GraphQLTaggedNode } from '@adeira/relay';

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
