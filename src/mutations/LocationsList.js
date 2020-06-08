// @flow strict-local

import * as React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';

import type { LocationsList_data as Data } from './__generated__/LocationsList_data.graphql';

type Props = {|
  +data: Data,
|};

function LocationsList(props: Props) {
  return (
    <>
      <h3>My favorite locations</h3>
      {props.data.locations?.edges?.map<React.Node>((edge) => (
        <div key={edge?.node?.id} style={{ padding: '12px', borderBottom: '1px solid black' }}>
          <div>
            name: {edge?.node?.name}, type: {edge?.node?.type}
          </div>
        </div>
      ))}
    </>
  );
}

export default createFragmentContainer(LocationsList, {
  data: graphql`
    fragment LocationsList_data on RootQuery {
      locations(first: 3) @connection(key: "LocationsList_locations") {
        edges {
          node {
            id
            name
            type
          }
        }
      }
    }
  `,
});
