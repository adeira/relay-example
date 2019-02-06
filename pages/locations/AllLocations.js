// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import type { AllLocations_data as AllLocationsDataType } from '__generated__/AllLocations_data.graphql';

import Location from './Location';

type Props = {|
  +data: AllLocationsDataType,
|};

function AllLocations(props: Props) {
  const edges = props.data.allLocations?.edges ?? [];
  return (
    <ol>
      {edges.map(edge => {
        if (edge) {
          return <Location key={edge.node?.id} location={edge.node} />;
        }
        return null; // or some failure placeholder
      })}
    </ol>
  );
}

export default createFragmentContainer(AllLocations, {
  data: graphql`
    fragment AllLocations_data on RootQuery {
      allLocations(first: 10) {
        edges {
          node {
            id(opaque: false)
            ...Location_location
          }
        }
      }
    }
  `,
});
