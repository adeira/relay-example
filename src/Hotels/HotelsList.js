// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';

import type { HotelsList_hotels as Hotels } from './__generated__/HotelsList_hotels.graphql';
import HotelListItem from './HotelListItem';

type Props = {|
  +hotels: ?Hotels,
|};

const HotelsList = (props: Props): React.Node => {
  const edges = props.hotels?.edges ?? [];
  return edges.map(edge => <HotelListItem key={edge?.node?.id} hotel={edge?.node} />);
};

export default createFragmentContainer(HotelsList, {
  hotels: graphql`
    fragment HotelsList_hotels on AllHotelAvailabilityHotelConnection {
      edges {
        node {
          id
          ...HotelListItem_hotel
        }
      }
    }
  `,
});
