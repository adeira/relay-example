// @flow

import React, { useState } from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import Button from '@kiwicom/orbit-components/lib/Button';
import ButtonGroup from '@kiwicom/orbit-components/lib/ButtonGroup';
import ChevronLeft from '@kiwicom/orbit-components/lib/icons/ChevronLeft';
import ChevronRight from '@kiwicom/orbit-components/lib/icons/ChevronRight';
import type { LocationsPaginatedBidirectionalConnection_connection as LocationsDataType } from '__generated__/LocationsPaginatedBidirectionalConnection_connection.graphql';

import Location from './Location';

type Props = {|
  +connection: ?LocationsDataType,
  +itemsCount: number,
  +onPageChange: (
    {| before?: ?string, after?: ?string |},
    callback: () => void,
  ) => void,
|};

function LocationsPaginatedBidirectionalConnection(props: Props) {
  const [start, setStart] = useState(1);

  const pageInfo = props.connection?.pageInfo;
  if (!pageInfo) {
    return null; // or some failure placeholder
  }

  function openPreviousPage() {
    props.onPageChange({ before: pageInfo.startCursor }, () =>
      setStart(start => start - props.itemsCount),
    );
  }

  function openNextPage() {
    props.onPageChange({ after: pageInfo.endCursor }, () =>
      setStart(start => start + props.itemsCount),
    );
  }

  const edges = props.connection?.edges ?? [];
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

export default createFragmentContainer(
  LocationsPaginatedBidirectionalConnection,
  {
    connection: graphql`
      fragment LocationsPaginatedBidirectionalConnection_connection on LocationConnection {
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
    `,
  },
);
