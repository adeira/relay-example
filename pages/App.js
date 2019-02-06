// @flow

import React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/relay';
import type { AppQueryResponse } from '__generated__/AppQuery.graphql';

import Environment from './Environment';
import AllLocations from './locations/AllLocations';

// TODO: distribute in '@kiwicom/relay' (distribute the while QueryRenderer properly set?)
type ReadyState = {|
  +error: ?Error,
  +props: ?AppQueryResponse,
  +retry: ?() => void,
|};

function renderQueryRendererResponse({ error, props, retry }: ReadyState) {
  if (error) {
    return <div>Error!</div>;
  }

  if (!props) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <button onClick={retry}>Refresh</button>
      <AllLocations data={props} />
    </>
  );
}

export default function App() {
  return (
    <QueryRenderer
      environment={Environment}
      query={graphql`
        query AppQuery {
          ...AllLocations_data
        }
      `}
      render={renderQueryRendererResponse}
    />
  );
}
