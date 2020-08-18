// @flow

import React, { useState } from 'react';
import {
  createRefetchContainer,
  graphql,
  type RefetchRelayProp,
  type RefetchContainerType,
} from '@adeira/relay';
import { Button, Box } from 'grommet';
import { Next, Previous } from 'grommet-icons';

import Location from './Location';
import type { LocationsPaginatedBidirectional_data as LocationsDataType } from './__generated__/LocationsPaginatedBidirectional_data.graphql';

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

  return (
    <>
      <ol start={start}>
        {props.data.locations?.edges?.map((edge) => (
          <Location key={edge?.node?.id} location={edge?.node} />
        ))}
      </ol>
      <Box flex={true} direction="row">
        <Button
          onClick={openPreviousPage}
          disabled={!pageInfo.hasPreviousPage}
          size="small"
          label="Previous page"
          primary
          icon={<Previous color="white" size="small" />}
        />
        <Button
          label="Next page"
          onClick={openNextPage}
          disabled={!pageInfo.hasNextPage}
          size="small"
          primary
          icon={<Next color="white" size="small" />}
          reverse
        />
      </Box>
    </>
  );
}

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
