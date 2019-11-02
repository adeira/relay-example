// @flow

import React from 'react';
import { graphql, type RecordMap } from '@adeira/relay';
import { Heading } from '@kiwicom/orbit-components';
import { format, addDays } from 'date-fns';

import HotelsList from './HotelsList';
import type { HotelsQueryResponse } from './__generated__/HotelsQuery.graphql';
import QueryRenderer from './SSRQueryRenderer';

export const query = graphql`
  query HotelsQuery($search: HotelsSearchInput!) {
    allAvailableBookingComHotels(search: $search) {
      ...HotelsList_hotels
    }
  }
`;

export const variables = {
  search: {
    cityId: 'SG90ZWxDaXR5Oi0zNzI0OTA=',
    checkin: format(addDays(new Date(), 7), 'YYYY-MM-DD'),
    checkout: format(addDays(new Date(), 9), 'YYYY-MM-DD'),
    roomsConfiguration: [{ adultsCount: 2 }],
  },
};

type Props = {|
  +ssrData: RecordMap,
|};

export default function HotelsQuery(props: Props) {
  return (
    <>
      <Heading element="h1">Hotels in Barcelona</Heading>
      <QueryRenderer
        query={query}
        variables={variables}
        onResponse={(renderProps: ?HotelsQueryResponse) => {
          return <HotelsList hotels={renderProps?.allAvailableBookingComHotels} />;
        }}
        ssrData={props.ssrData}
      />
    </>
  );
}
