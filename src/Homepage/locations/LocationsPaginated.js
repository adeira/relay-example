// @flow

import React from 'react';
import { createPaginationContainer, graphql, type PaginationRelayProp } from '@adeira/relay';
import { Button } from 'grommet';

import Location from './Location';
import type { LocationsPaginated_data as LocationsDataType } from './__generated__/LocationsPaginated_data.graphql';

type Props = {|
  +data: LocationsDataType,
  +relay: PaginationRelayProp,
|};

function LocationsPaginated(props: Props) {
  function loadMore() {
    if (!props.relay.hasMore() || props.relay.isLoading()) {
      return;
    }

    props.relay.loadMore(20, (error) => {
      if (error) {
        console.error(error); // eslint-disable-line no-console
      }
    });
  }

  return (
    <>
      <ol>
        {props.data.incrementalPagination2?.edges?.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </ol>
      <Button label="Load more!" onClick={loadMore} size="small" primary />
    </>
  );
}

export default createPaginationContainer(
  LocationsPaginated,
  {
    data: graphql`
      fragment LocationsPaginated_data on RootQuery
        @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" }) {
        incrementalPagination2: locations(first: $count, after: $after)
          @connection(key: "locations_incrementalPagination2") {
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
    getVariables: (props, paginationInfo) => paginationInfo,
    query: graphql`
      query LocationsPaginatedRefetchQuery($count: Int, $cursor: String) {
        ...LocationsPaginated_data @arguments(count: $count, after: $cursor)
      }
    `,
  },
);
