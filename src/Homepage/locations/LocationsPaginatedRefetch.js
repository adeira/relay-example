// @flow

import { Button } from '@adeira/sx-design';
import { type Node, useCallback } from 'react';
import { graphql, useRefetchableFragment } from '@adeira/relay';

import Location from './Location';
import LocationList from './LocationsList';
import { type LocationsPaginatedRefetchRefetchQuery } from './__generated__/LocationsPaginatedRefetchRefetchQuery.graphql';
import { type LocationsPaginatedRefetch$key } from './__generated__/LocationsPaginatedRefetch.graphql';

type Props = {
  +data: LocationsPaginatedRefetch$key,
};

export default function LocationsPaginatedRefetch(props: Props): Node {
  const [data, refetch] = useRefetchableFragment<
    LocationsPaginatedRefetchRefetchQuery,
    LocationsPaginatedRefetch$key,
  >(
    graphql`
      fragment LocationsPaginatedRefetch on RootQuery
      @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" })
      @refetchable(queryName: "LocationsPaginatedRefetchRefetchQuery") {
        incrementalPagination: locations(first: $count, after: $after)
          @connection(key: "locations_incrementalPagination") {
          edges {
            node {
              id
              ...Location
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    `,
    props.data,
  );

  const { endCursor, hasNextPage } = data.incrementalPagination?.pageInfo ?? {};
  const loadMore = useCallback(() => {
    if (!hasNextPage) {
      return;
    }

    const variables = {
      count: 20,
      after: endCursor,
    };
    refetch(variables, {
      fetchPolicy: 'store-and-network',
    });
  }, [hasNextPage, endCursor, refetch]);

  const edges = data.incrementalPagination?.edges ?? [];
  return (
    <>
      <LocationList>
        {edges.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </LocationList>
      <Button data-testid="loadMore" onClick={loadMore} isDisabled={!hasNextPage}>
        {/* $FlowFixMe[incompatible-type]: Button children should be FBT */}
        Load more!
      </Button>
    </>
  );
}
