// @flow

import React, { Component } from 'react';
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

export default class App extends Component<{||}> {
  renderQueryRendererResponse = ({ error, props }: ReadyState) => {
    if (error) {
      return <div>Error!</div>;
    }

    if (!props) {
      return <div>Loading...</div>;
    }

    return <AllLocations data={props} />;
  };

  render() {
    return (
      <QueryRenderer
        environment={Environment}
        query={graphql`
          query AppQuery {
            ...AllLocations_data
          }
        `}
        render={this.renderQueryRendererResponse}
      />
    );
  }
}
