// @flow

import React, { Component } from 'react';
// TODO: import createFragmentContainer from '@kiwicom/relay'
import { graphql, createFragmentContainer } from 'react-relay';

import type { Location as LocationDataType } from './__generated__/Location.graphql';

type Props = {|
  +data: LocationDataType,
|};

class Location extends Component<Props> {
  render() {
    return <li>{this.props.data.name}</li>;
  }
}

export default createFragmentContainer(
  Location,
  graphql`
    fragment Location on Location {
      name
    }
  `,
);
