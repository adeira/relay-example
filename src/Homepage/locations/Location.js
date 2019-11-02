// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';
import Text from '@kiwicom/orbit-components/lib/Text';
import Stack from '@kiwicom/orbit-components/lib/Stack';

import CountryFlag from './CountryFlag';
import type { Location_location as LocationDataType } from './__generated__/Location_location.graphql';

type Props = {|
  +location: ?LocationDataType,
|};

function Location({ location }: Props) {
  if (!location) {
    return null; // or some failure placeholder
  }

  const name = location.name ?? '';
  return (
    <li>
      <Stack direction="row" spacing="compact">
        <CountryFlag location={location} />
        <Text dataTest={`location-${name}`} element="div">
          {name}
        </Text>
      </Stack>
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
