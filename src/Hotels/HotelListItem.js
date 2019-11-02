// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';

import type { HotelListItem_hotel as Hotel } from './__generated__/HotelListItem_hotel.graphql';

type Props = {|
  +hotel: ?Hotel,
|};

const HotelListItem = (props: Props) => {
  return <div>{props.hotel?.name}</div>;
};

export default createFragmentContainer(HotelListItem, {
  hotel: graphql`
    fragment HotelListItem_hotel on AllHotelAvailabilityHotel {
      name
    }
  `,
});
