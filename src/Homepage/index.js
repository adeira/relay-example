// @flow

import { Text } from '@adeira/sx-design';
import { Suspense, type Node } from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';
import sx from '@adeira/sx';

import LocationsPaginatedBidirectional from './locations/LocationsPaginatedBidirectional';
import LocationsPaginatedRefetch from './locations/LocationsPaginatedRefetch';
import LocationsPaginated from './locations/LocationsPaginated';
import { desktop } from '../components/breakpoints';
import type { HomepageQueryResponse } from './__generated__/HomepageQuery.graphql';

function Demo(props) {
  return (
    <>
      <Text as="h2">{props.title}</Text>
      {/* $FlowFixMe[incompatible-type]: SX Design currently doesn't allow other than textual children */}
      <Text as="small">
        See:{' '}
        <a rel="noreferrer" target="_blank" href={props.link}>
          {props.linkTitle}
        </a>
      </Text>
      <Suspense fallback={<div>loading...</div>}>{props.component}</Suspense>
    </>
  );
}

const ITEMS_COUNT = 20; // change me

function renderQueryRendererResponse(props: HomepageQueryResponse) {
  return (
    <div className={styles('container')}>
      <div className="column">
        <Demo
          title="Bi-directional pagination"
          link="https://relay.dev/docs/api-reference/use-refetchable-fragment/"
          linkTitle="useRefetchableFragment"
          component={<LocationsPaginatedBidirectional data={props} itemsCount={ITEMS_COUNT} />}
        />
      </div>

      <div className="column">
        <Demo
          title="Incremental pagination 1"
          link="https://relay.dev/docs/api-reference/use-refetchable-fragment/"
          linkTitle="useRefetchableFragment"
          component={<LocationsPaginatedRefetch data={props} />}
        />
      </div>

      <div className="column">
        <Demo
          title="Incremental pagination 2"
          link="https://relay.dev/docs/api-reference/use-pagination-fragment/"
          linkTitle="usePaginationFragment"
          component={<LocationsPaginated data={props} />}
        />
      </div>
    </div>
  );
}

export default function Homepage(): Node {
  const queryVariables = {
    count: ITEMS_COUNT,
  };

  return (
    <QueryRenderer
      query={graphql`
        query HomepageQuery($count: Int!) {
          ...LocationsPaginatedBidirectional @arguments(first: $count)
          ...LocationsPaginatedRefetch
          ...LocationsPaginated
        }
      `}
      variables={queryVariables}
      onResponse={renderQueryRendererResponse}
    />
  );
}

const styles = sx.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: 16,
    [desktop]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});
