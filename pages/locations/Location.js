// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import type { Location_location as LocationDataType } from '__generated__/Location_location.graphql';

type Props = {|
  +location: ?LocationDataType,
|};

function Location(props: Props) {
  return <li>{props.location?.name}</li>;
}

export default createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
    }
  `,
});
