// @flow

import React from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@adeira/relay';
import { Text, Box } from 'grommet';

import type { Location_location as LocationDataType } from './__generated__/Location_location.graphql';

type Props = {|
  +location: ?LocationDataType,
|};

function Location({ location }: Props) {
  if (!location) {
    return null; // or some failure placeholder
  }

  const name = location.name ?? '';
  const countryName = location.country?.name ?? '';
  return (
    <li>
      <Box align="center" direction="row" gap="small">
        <img src={location.countryFlagURL} alt={`${countryName} flag`} height="24" width="24" />
        <Text dataTest={`location-${name}`} size="small">
          {name}
        </Text>
      </Box>
    </li>
  );
}

export default (createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
      countryFlagURL
      country {
        name
      }
    }
  `,
}): FragmentContainerType<Props>);
