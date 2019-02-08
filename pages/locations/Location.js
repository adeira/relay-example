// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import type { Location_location as LocationDataType } from '__generated__/Location_location.graphql';

type Props = {|
  +location: ?LocationDataType,
|};

function Location({ location }: Props) {
  if (!location) {
    return null; // or some failure placeholder
  }

  const { countryFlagURL, name } = location;
  return (
    <li>
      <img width={12} src={countryFlagURL} /> {name}
    </li>
  );
}

export default createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
      countryFlagURL
    }
  `,
});
