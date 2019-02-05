// @flow

import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import Environment from './Environment';
import AllLocations from './AllLocations';

type Props = {||};

// TODO: distribute in '@kiwicom/relay'
type ReadyState = {|
  +error: ?Error,
  +props: ?Object,
  +retry: ?() => void,
|};

export default class App extends Component<Props> {
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
            ...AllLocations
          }
        `}
        render={this.renderQueryRendererResponse}
      />
    );
  }
}
