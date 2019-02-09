// @flow

import React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/relay';
import type { AppQueryResponse } from '__generated__/AppQuery.graphql';

import Environment from './Environment';
import LocationsPaginatedBidirectional from './locations/LocationsPaginatedBidirectional';
import LocationsPaginatedRefetch from './locations/LocationsPaginatedRefetch';
import LocationsPaginated from './locations/LocationsPaginated';

// TODO: distribute in '@kiwicom/relay' (distribute the while QueryRenderer properly set?)
type ReadyState = {|
  +error: ?Error,
  +props: ?AppQueryResponse,
  +retry: ?() => void,
|};

function renderQueryRendererResponse({ error, props, retry }: ReadyState) {
  if (error) {
    return (
      <div>
        Error!{' '}
        <a onClick={retry} href="#">
          Retry
        </a>
        ?
      </div>
    );
  }

  if (!props) {
    return <div>Loading...</div>;
  }

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
        <h2>Bi-directional pagination</h2>
        <p>
          See:{' '}
          <a href="https://facebook.github.io/relay/docs/en/refetch-container.html">
            Refetch Container
          </a>
        </p>
        <LocationsPaginatedBidirectional data={props} />
      </div>

      <div className="column">
        <h2>Incremental pagination 1</h2>
        <p>
          See:{' '}
          <a href="https://facebook.github.io/relay/docs/en/refetch-container.html">
            Refetch Container
          </a>
        </p>
        <LocationsPaginatedRefetch data={props} />
      </div>

      <div className="column">
        <h2>Incremental pagination 2</h2>
        <p>
          See:{' '}
          <a href="https://facebook.github.io/relay/docs/en/pagination-container.html">
            Pagination Container
          </a>
        </p>
        <LocationsPaginated data={props} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query AppQuery {
          ...LocationsPaginatedBidirectional_data
          ...LocationsPaginatedRefetch_data
          ...LocationsPaginated_data
        }
      `}
      render={renderQueryRendererResponse}
    />
  );
}
