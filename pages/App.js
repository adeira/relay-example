// @flow

import React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/relay';
import Head from 'next/head';
import Heading from '@kiwicom/orbit-components/lib/Heading';
import Text from '@kiwicom/orbit-components/lib/Text';
import type { AppQueryResponse } from '__generated__/AppQuery.graphql';

import LocationsPaginatedBidirectional from './locations/LocationsPaginatedBidirectional';
import LocationsPaginatedRefetch from './locations/LocationsPaginatedRefetch';
import LocationsPaginated from './locations/LocationsPaginated';

function Demo(props) {
  return (
    <>
      <Heading type="title2">{props.title}</Heading>
      <Text>
        See: <a href={props.link}>{props.linkTitle}</a>
      </Text>
      {props.component}
    </>
  );
}

const ITEMS_COUNT = 20; // change me

function renderQueryRendererResponse(props: AppQueryResponse) {
  return (
    <div className="row">
      <style jsx>{`
        .row {
          display: flex;
        }

        .column {
          flex: 1;
        }
      `}</style>

      <div className="column">
        <Demo
          title="Bi-directional pagination"
          link="https://facebook.github.io/relay/docs/en/refetch-container.html"
          linkTitle="Refetch Container"
          component={
            <LocationsPaginatedBidirectional
              data={props.dangerZone}
              itemsCount={ITEMS_COUNT}
            />
          }
        />
      </div>

      <div className="column">
        <Demo
          title="Incremental pagination 1"
          link="https://facebook.github.io/relay/docs/en/refetch-container.html"
          linkTitle="Refetch Container"
          component={<LocationsPaginatedRefetch data={props} />}
        />
      </div>

      <div className="column">
        <Demo
          title="Incremental pagination 2"
          link="https://facebook.github.io/relay/docs/en/pagination-container.html"
          linkTitle="Pagination Container"
          component={<LocationsPaginated data={props} />}
        />
      </div>
    </div>
  );
}

export default function App() {
  const queryVariables = {
    count: ITEMS_COUNT,
  };

  return (
    <>
      <Head>
        <title>Relay example project</title>
      </Head>
      <Heading>Relay pagination showcase</Heading>
      <QueryRenderer
        clientID="https://github.com/kiwicom/relay-example"
        query={graphql`
          query AppQuery($count: Int!) {
            dangerZone {
              ...LocationsPaginatedBidirectional_data @arguments(first: $count)
            }
            ...LocationsPaginatedRefetch_data
            ...LocationsPaginated_data
          }
        `}
        variables={queryVariables}
        onResponse={renderQueryRendererResponse}
      />
    </>
  );
}
