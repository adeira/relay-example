// @flow

import React from 'react';
import {
  createRefetchContainer,
  graphql,
  type RefetchRelayProp,
} from '@kiwicom/relay';
import type { LocationsPaginatedBidirectional_data as LocationsDataType } from '__generated__/LocationsPaginatedBidirectional_data.graphql';

import LocationsPaginatedBidirectionalConnection from './LocationsPaginatedBidirectionalConnection';
import HTTPError from './HTTPError';

type Props = {|
  +itemsCount: number,
  +data: LocationsDataType,
  +relay: RefetchRelayProp,
|};

function LocationsPaginatedBidirectional(props: Props) {
  function handlePageChange(
    args: {| before?: ?string, after?: ?string |},
    callback: () => void,
  ) {
    props.relay.refetch(
      {
        first: args.after ? props.itemsCount : null,
        after: args.after,
        last: args.before ? props.itemsCount : null,
        before: args.before,
      },
      null,
      error => {
        if (error) {
          console.error(error); // eslint-disable-line no-console
        }
        callback();
      },
    );
  }

  const locations = props.data.allLocations;
  if (locations) {
    if (locations.__typename === 'DangerZone_HTTPErrorType') {
      return <HTTPError error={locations} />;
    } else if (locations.__typename === 'LocationConnection') {
      return (
        <LocationsPaginatedBidirectionalConnection
          connection={locations}
          onPageChange={handlePageChange}
          itemsCount={props.itemsCount}
        />
      );
    }
  }

  return null; // TODO: some generic error component maybe
}

export default createRefetchContainer(
  LocationsPaginatedBidirectional,
  {
    data: graphql`
      fragment LocationsPaginatedBidirectional_data on DangerZone_RootQuery
        @argumentDefinitions(
          first: { type: "Int" }
          last: { type: "Int" }
          after: { type: "String" }
          before: { type: "String" }
        ) {
        allLocations(
          forceFail: false # change this to force BE fail
          first: $first
          last: $last
          after: $after
          before: $before
        ) {
          __typename
          ... on LocationConnection {
            ...LocationsPaginatedBidirectionalConnection_connection
          }
          ... on DangerZone_HTTPErrorType {
            ...HTTPError_error
          }
        }
      }
    `,
  },
  graphql`
    query LocationsPaginatedBidirectionalRefetchQuery(
      $first: Int
      $last: Int
      $after: String
      $before: String
    ) {
      dangerZone {
        ...LocationsPaginatedBidirectional_data
          @arguments(first: $first, last: $last, after: $after, before: $before)
      }
    }
  `,
);
