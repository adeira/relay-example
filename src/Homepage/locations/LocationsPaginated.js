// @flow

import {
  createPaginationContainer,
  graphql,
  type PaginationRelayProp,
  type PaginationContainerType,
} from '@adeira/relay';

import Button from '../../components/Button';
import Location from './Location';
import LocationList from './LocationsList';
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
  const edges = props.data.incrementalPagination2?.edges ?? [];
  return (
    <>
      <LocationList>
        {edges.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </LocationList>
      <Button onClick={loadMore}>Load more!</Button>
    </>
  );
}

export default (createPaginationContainer(
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
              ...Location
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
): PaginationContainerType<Props>);
