// @flow

import React, { useState } from 'react';
import {
  createRefetchContainer,
  graphql,
  type RefetchRelayProp,
} from '@kiwicom/relay';
import Button from '@kiwicom/orbit-components/lib/Button';
import ButtonGroup from '@kiwicom/orbit-components/lib/ButtonGroup';
import ChevronLeft from '@kiwicom/orbit-components/lib/icons/ChevronLeft';
import ChevronRight from '@kiwicom/orbit-components/lib/icons/ChevronRight';
import type { LocationsPaginatedBidirectional_data as LocationsDataType } from '__generated__/LocationsPaginatedBidirectional_data.graphql';

import Location from './Location';

type Props = {|
  +data: LocationsDataType,
  +relay: RefetchRelayProp,
|};

const ITEMS = 20;

function LocationsPaginatedBidirectional(props: Props) {
  const [start, setStart] = useState(1);

  const pageInfo = props.data.allLocations?.pageInfo;
  if (!pageInfo) {
    return null; // or some failure placeholder
  }

  function _refetch({ after, before }: Object, callback) {
    props.relay.refetch(
      {
        first: after ? ITEMS : null,
        after,
        last: before ? ITEMS : null,
        before,
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

  function openPreviousPage() {
    _refetch({ before: pageInfo.startCursor }, () =>
      setStart(start => start - ITEMS),
    );
  }

  function openNextPage() {
    _refetch({ after: pageInfo.endCursor }, () =>
      setStart(start => start + ITEMS),
    );
  }

  const edges = props.data.allLocations?.edges ?? [];
  return (
    <>
      <ol start={start}>
        {edges.map(edge => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </ol>
      <ButtonGroup connected={true}>
        <Button
          onClick={openPreviousPage}
          disabled={!pageInfo.hasPreviousPage}
          size="small"
          iconLeft={<ChevronLeft />}
        >
          Previous page
        </Button>
        <Button
          onClick={openNextPage}
          disabled={!pageInfo.hasNextPage}
          size="small"
          iconRight={<ChevronRight />}
        >
          Next page
        </Button>
      </ButtonGroup>
    </>
  );
}

export default createRefetchContainer(
  LocationsPaginatedBidirectional,
  {
    data: graphql`
      fragment LocationsPaginatedBidirectional_data on RootQuery
        @argumentDefinitions(
          first: { type: "Int", defaultValue: 20 }
          last: { type: "Int" }
          after: { type: "String" }
          before: { type: "String" }
        ) {
        allLocations(
          first: $first
          last: $last
          after: $after
          before: $before
        ) {
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
);
