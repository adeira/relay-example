// @flow

import React from 'react';
import {
  createPaginationContainer,
  graphql,
  type PaginationRelayProp,
} from '@kiwicom/relay';
import Button from '@kiwicom/orbit-components/lib/Button';
import type { LocationsPaginated_data as LocationsDataType } from '__generated__/LocationsPaginated_data.graphql';

import Location from './Location';

type Props = {|
  +data: LocationsDataType,
  +relay: PaginationRelayProp,
|};

function LocationsPaginated(props: Props) {
  function loadMore() {
    if (!props.relay.hasMore() || props.relay.isLoading()) {
      return;
    }

    props.relay.loadMore(20, error => {
      if (error) {
        console.error(error); // eslint-disable-line no-console
      }
    });
  }

  const edges = props.data.incrementalPagination2?.edges ?? [];
  return (
    <>
      <ol>
        {edges.map(edge => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </ol>
      <Button onClick={loadMore} size="small">
        Load more!
      </Button>
    </>
  );
}

export default createPaginationContainer(
  LocationsPaginated,
  {
    data: graphql`
      fragment LocationsPaginated_data on RootQuery
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 20 }
          after: { type: "String" }
        ) {
        incrementalPagination2: allLocations(first: $count, after: $after)
          @connection(key: "allLocations_incrementalPagination2") {
          edges {
            node {
              id
              ...Location_location
            }
          }
        }
      }
    `,
  },
  {
    getVariables: (props, { count, cursor }, fragmentVariables) => {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
      query LocationsPaginatedRefetchQuery($count: Int, $cursor: String) {
        ...LocationsPaginated_data @arguments(count: $count, after: $cursor)
      }
    `,
  },
);
