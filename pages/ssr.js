// @flow

import React from 'react';
import { fetchQuery, type RecordMap } from '@kiwicom/relay';

import createRelayEnvironment from '../src/createRelayEnvironment';
import HotelsQuery, { query, variables } from '../src/Hotels/HotelsQuery';

type Props = {|
  +ssrData: RecordMap,
|};

function Ssr(props: Props) {
  return <HotelsQuery ssrData={props.ssrData} />;
}

Ssr.getInitialProps = async () => {
  const environment = createRelayEnvironment(undefined);
  await fetchQuery(environment, query, variables);
  const ssrData = environment
    .getStore()
    .getSource()
    .toJSON();

  return { ssrData };
};

export default Ssr;
