// @flow

import Icon from '@adeira/icons';
import { Button } from '@adeira/sx-design';
import { useState, type Node } from 'react';
import { graphql, useRefetchableFragment } from '@adeira/relay';
import sx from '@adeira/sx';

import Location from './Location';
import LocationList from './LocationsList';
import { type LocationsPaginatedBidirectionalRefetchQuery } from './__generated__/LocationsPaginatedBidirectionalRefetchQuery.graphql';
import type { LocationsPaginatedBidirectional$key } from './__generated__/LocationsPaginatedBidirectional.graphql';

type Props = {
  +itemsCount: number,
  +data: LocationsPaginatedBidirectional$key,
};

export default function LocationsPaginatedBidirectional(props: Props): Node {
  const [start, setStart] = useState(1);

  const [data, refetch] = useRefetchableFragment<
    LocationsPaginatedBidirectionalRefetchQuery,
    LocationsPaginatedBidirectional$key,
  >(
    graphql`
      fragment LocationsPaginatedBidirectional on RootQuery
      @argumentDefinitions(
        first: { type: "Int" }
        last: { type: "Int" }
        after: { type: "String" }
        before: { type: "String" }
      )
      @refetchable(queryName: "LocationsPaginatedBidirectionalRefetchQuery") {
        locations(first: $first, last: $last, after: $after, before: $before) {
          edges {
            node {
              id
              ...Location
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `,
    props.data,
  );

  const pageInfo = data.locations?.pageInfo;
  if (!pageInfo) {
    return null; // or some failure placeholder
  }

  function handlePageChange(args: { before?: ?string, after?: ?string }, callback: () => void) {
    refetch(
      {
        first: args.after != null ? props.itemsCount : null,
        after: args.after,
        last: args.before != null ? props.itemsCount : null,
        before: args.before,
      },
      { onComplete: () => callback() },
    );
  }

  function openPreviousPage() {
    handlePageChange({ before: pageInfo.startCursor }, () =>
      setStart((start) => start - props.itemsCount),
    );
  }

  function openNextPage() {
    handlePageChange({ after: pageInfo.endCursor }, () =>
      setStart((start) => start + props.itemsCount),
    );
  }

  const edges = data.locations?.edges ?? [];
  return (
    <>
      <LocationList start={start}>
        {edges.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </LocationList>
      <div className={styles('buttonBox')}>
        <Button
          onClick={openPreviousPage}
          isDisabled={!pageInfo.hasPreviousPage}
          prefix={<Icon name="chevron_left" />}
        >
          Previous&nbsp;page
        </Button>
        <Button
          onClick={openNextPage}
          isDisabled={!pageInfo.hasNextPage}
          suffix={<Icon name="chevron_right" />}
        >
          Next&nbsp;page
        </Button>
      </div>
    </>
  );
}

const styles = sx.create({
  buttonBox: {
    display: 'flex',
    gap: 'var(--space-small)',
  },
});
