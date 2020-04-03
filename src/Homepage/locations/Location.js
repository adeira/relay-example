// @flow

import React from 'react';
import { createFragmentContainer, graphql } from '@adeira/relay';
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
  return (
    <li>
      <Box direction="row" gap="small">
        <Text dataTest={`location-${name}`} size="small">
          {name}
        </Text>
      </Box>
    </li>
  );
}

export default createFragmentContainer(Location, {
  location: graphql`
    fragment Location_location on Location {
      name
    }
  `,
});
