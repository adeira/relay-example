// @flow

import React from 'react';
import { fetchQuery, type RecordMap } from '@adeira/relay';

import createRelayEnvironment from '../createRelayEnvironment';
import LocationsQuery, { query, variables } from '../SSRLocations/LocationsQuery';

type Props = {|
  +ssrData: RecordMap,
|};

function Ssr(props: Props) {
  return <LocationsQuery ssrData={props.ssrData} />;
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
