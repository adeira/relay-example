// @flow strict

import React from 'react';
import { QueryRenderer, graphql } from '@kiwicom/relay';
import { Heading } from '@kiwicom/orbit-components';

import HotelsList from './HotelsList';
import type { HotelsQueryResponse } from './__generated__/HotelsQuery.graphql';

export const query = graphql`
  query HotelsQuery($search: HotelsSearchInput!) {
    allAvailableBookingComHotels(search: $search) {
      ...HotelsList_hotels
    }
  }
`;

export default function HotelsQuery() {
  return (
    <>
      <Heading element="h1">Hotels in Barcelona</Heading>
      <QueryRenderer
        query={query}
        clientID="relay-example"
        variables={{
          search: {
            cityId: 'SG90ZWxDaXR5Oi0zNzI0OTA=',
            checkin: '2019-10-01',
            checkout: '2019-10-02',
            roomsConfiguration: [{ adultsCount: 2 }],
          },
        }}
        onResponse={(renderProps: HotelsQueryResponse) => (
          <HotelsList hotels={renderProps.allAvailableBookingComHotels} />
        )}
      />
    </>
  );
}
