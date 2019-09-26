// @flow

import React from 'react';
import { fetchQuery } from '@kiwicom/relay';

import HotelsQuery, { query, variables } from '../src/Hotels/HotelsQuery';
import { createRelayEnvironment } from '../src/Hotels/SSRQueryRenderer';

type Props = {|
  +ssrData: $FlowFixMe, // What is it exactly 🤔
|};

export default function Ssr(props: Props) {
  return <HotelsQuery ssrData={props.ssrData} />;
}

Ssr.getInitialProps = async () => {
  const environment = createRelayEnvironment();
  await fetchQuery(environment, query, variables);
  const ssrData = environment
    .getStore()
    .getSource()
    .toJSON();

  return { ssrData };
};
