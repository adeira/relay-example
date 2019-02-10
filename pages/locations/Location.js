// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/relay';
import Text from '@kiwicom/orbit-components/lib/Text';
import type { Location_location as LocationDataType } from '__generated__/Location_location.graphql';

import CountryFlag from './CountryFlag';

type Props = {|
  +location: ?LocationDataType,
|};

function Location({ location }: Props) {
  if (!location) {
    return null; // or some failure placeholder
  }

  const { name } = location;
  return (
    <li>
      <Text>
        <CountryFlag location={location} /> {name}
      </Text>
    </li>
  );
}

export default createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
      ...CountryFlag_location
    }
  `,
});
