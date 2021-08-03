// @flow

import { Button } from '@adeira/sx-design';
import { type Node, useCallback } from 'react';
import { graphql, usePaginationFragment } from '@adeira/relay';

import Location from './Location';
import LocationList from './LocationsList';
import { type LocationsPaginatedRefetchQuery } from './__generated__/LocationsPaginatedRefetchQuery.graphql';
import { type LocationsPaginated$key } from './__generated__/LocationsPaginated.graphql';

type Props = {
  +data: LocationsPaginated$key,
};

export default function LocationsPaginated(props: Props): Node {
  const { data, loadNext, isLoadingNext, hasNext } = usePaginationFragment<
    LocationsPaginatedRefetchQuery,
    LocationsPaginated$key,
  >(
    graphql`
      fragment LocationsPaginated on RootQuery
      @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" })
      @refetchable(queryName: "LocationsPaginatedRefetchQuery") {
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
    props.data,
  );

  const loadMore = useCallback(() => {
    if (isLoadingNext || !hasNext) {
      return;
    }
    loadNext(20);
  }, [isLoadingNext, hasNext, loadNext]);

  const edges = data.incrementalPagination2?.edges ?? [];

  return (
    <>
      <LocationList>
        {edges.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </LocationList>
      <Button onClick={loadMore} isDisabled={!hasNext}>
        Load more!
      </Button>
    </>
  );
}
