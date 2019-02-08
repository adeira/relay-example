// @flow

import React, { useState } from 'react';
import {
  createRefetchContainer,
  graphql,
  type RelayProp,
} from '@kiwicom/relay';
import type { AllLocations_data as AllLocationsDataType } from '__generated__/AllLocations_data.graphql';

import Location from './Location';

type Props = {|
  +data: AllLocationsDataType,
  +relay: RelayProp,
|};

const ITEMS = 20;

function AllLocations(props: Props) {
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
      <button
        onClick={openPreviousPage}
        style={{ background: pageInfo.hasPreviousPage ? 'lightgreen' : 'none' }}
        disabled={!pageInfo.hasPreviousPage}
      >
        Previous page
      </button>
      <button
        onClick={openNextPage}
        style={{ background: pageInfo.hasNextPage ? 'lightgreen' : 'none' }}
        disabled={!pageInfo.hasNextPage}
      >
        Next page
      </button>
    </>
  );
}

export default createRefetchContainer(
  AllLocations,
  {
    data: graphql`
      fragment AllLocations_data on RootQuery
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
    query AllLocationsRefetchQuery(
      $first: Int
      $last: Int
      $after: String
      $before: String
    ) {
      ...AllLocations_data
        @arguments(first: $first, last: $last, after: $after, before: $before)
    }
  `,
);
