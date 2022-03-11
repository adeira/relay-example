// @flow

import type { Node } from 'react';
import { fetchQuery, type RecordMap } from '@adeira/relay';

import createRelayEnvironment from '../src/createRelayEnvironment';
import LocationsQuery, { query, variables } from '../src/SSRLocations/LocationsQuery';

type Props = {
  +ssrData: RecordMap,
};

function Ssr(props: Props): Node {
  return <LocationsQuery ssrData={props.ssrData} />;
}

Ssr.getInitialProps = async function (): Promise<{ +ssrData: any }> {
  const environment = createRelayEnvironment(undefined);
  await fetchQuery(environment, query, variables).toPromise();

  return {
    ssrData: environment.getStore().getSource().toJSON(),
  };
};

export default Ssr;
