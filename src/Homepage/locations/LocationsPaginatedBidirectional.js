// @flow

import React, { useState } from 'react';
import {
  createRefetchContainer,
  graphql,
  type RefetchRelayProp,
  type RefetchContainerType,
} from '@adeira/relay';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import * as sx from '@adeira/sx';

import Location from './Location';
import type { LocationsPaginatedBidirectional_data as LocationsDataType } from './__generated__/LocationsPaginatedBidirectional_data.graphql';
import Button from '../../components/Button';
import LocationList from './LocationsList';

type Props = {|
  +itemsCount: number,
  +data: LocationsDataType,
  +relay: RefetchRelayProp,
|};

function LocationsPaginatedBidirectional(props: Props) {
  const [start, setStart] = useState(1);

  const pageInfo = props.data.locations?.pageInfo;
  if (!pageInfo) {
    return null; // or some failure placeholder
  }

  function handlePageChange(args: {| before?: ?string, after?: ?string |}, callback: () => void) {
    props.relay.refetch(
      {
        first: args.after != null ? props.itemsCount : null,
        after: args.after,
        last: args.before != null ? props.itemsCount : null,
        before: args.before,
      },
      null,
      (error) => {
        if (error) {
          console.error(error); // eslint-disable-line no-console
        }
        callback();
      },
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

  const edges = props.data.locations?.edges ?? [];
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
          disabled={!pageInfo.hasPreviousPage}
          iconLeft={<MdChevronLeft color="var(--text-color)" size="16" />}
        >
          Previous&nbsp;page
        </Button>
        <Button
          onClick={openNextPage}
          disabled={!pageInfo.hasNextPage}
          iconRight={<MdChevronRight color="var(--text-color)" size="16" />}
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

export default (createRefetchContainer(
  LocationsPaginatedBidirectional,
  {
    data: graphql`
      fragment LocationsPaginatedBidirectional_data on RootQuery
      @argumentDefinitions(
        first: { type: "Int" }
        last: { type: "Int" }
        after: { type: "String" }
        before: { type: "String" }
      ) {
        locations(first: $first, last: $last, after: $after, before: $before) {
          edges {
            node {
              id
              ...Location_location
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
  },
  graphql`
    query LocationsPaginatedBidirectionalRefetchQuery(
      $first: Int
      $last: Int
      $after: String
      $before: String
    ) {
      ...LocationsPaginatedBidirectional_data
        @arguments(first: $first, last: $last, after: $after, before: $before)
    }
  `,
): RefetchContainerType<Props>);
