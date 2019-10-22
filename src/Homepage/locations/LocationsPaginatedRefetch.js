// @flow

import React from 'react';
import { createRefetchContainer, graphql, type RefetchRelayProp } from '@kiwicom/relay';
import Button from '@kiwicom/orbit-components/lib/Button';

import Location from './Location';
import type { LocationsPaginatedRefetch_data as LocationsDataType } from './__generated__/LocationsPaginatedRefetch_data.graphql';

type Props = {|
  +data: LocationsDataType,
  +relay: RefetchRelayProp,
|};

function LocationsPaginatedRefetch(props: Props) {
  function loadMore() {
    props.relay.refetch(
      refetchVariables => {
        return {
          ...refetchVariables,
          after: props.data.incrementalPagination?.pageInfo.endCursor,
        };
      },
      null,
      error => {
        if (error) {
          console.error(error); // eslint-disable-line no-console
        }
      },
    );
  }

  const edges = props.data.incrementalPagination?.edges ?? [];
  return (
    <>
      <ol>
        {edges.map(edge => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </ol>
      <Button dataTest="loadMore" onClick={loadMore} size="small">
        Load more!
      </Button>
    </>
  );
}

export default createRefetchContainer(
  LocationsPaginatedRefetch,
  {
    data: graphql`
      fragment LocationsPaginatedRefetch_data on RootQuery
        @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" }) {
        incrementalPagination: allLocations(first: $count, after: $after)
          @connection(key: "allLocations_incrementalPagination") {
          edges {
            node {
              id
              ...Location_location
            }
          }
          pageInfo {
            endCursor
          }
        }
      }
    `,
  },
  graphql`
    query LocationsPaginatedRefetchRefetchQuery($count: Int, $after: String) {
      ...LocationsPaginatedRefetch_data @arguments(count: $count, after: $after)
    }
  `,
);
