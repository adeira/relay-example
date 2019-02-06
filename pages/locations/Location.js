// @flow

import React, { Component } from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/relay';
import type { Location_location as LocationDataType } from '__generated__/Location_location.graphql';

type Props = {|
  +location: ?LocationDataType,
|};

class Location extends Component<Props> {
  render() {
    return <li>{this.props.location?.name}</li>;
  }
}

export default createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
    }
  `,
});
