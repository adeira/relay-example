// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';

import type { LocationsList_locations as Locations } from './__generated__/LocationsList_locations.graphql';
import LocationListItem from './LocationListItem';

type Props = {|
  +locations: ?Locations,
|};

const LocationsList = (props: Props): React.Node => {
  const edges = props.locations?.edges ?? [];
  return edges.map(edge => <LocationListItem key={edge?.node?.id} location={edge?.node} />);
};

export default createFragmentContainer(LocationsList, {
  locations: graphql`
    fragment LocationsList_locations on LocationConnection {
      edges {
        node {
          id
          ...LocationListItem_location
        }
      }
    }
  `,
});
