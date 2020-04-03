// @flow

import * as React from 'react';
import { Heading, Text } from 'grommet';

import RangeAddExample from '../../mutations/RangeAdd/RangeAdd';

export default function RangeAdd() {
  return (
    <>
      <Heading level={1} size="small">
        Range add mutation
      </Heading>
      <Text size="small">
        This example shows how you can use relays range add config to easily add new object to your
        connections
        <br />
        Try adding a location with the form on the right hand side
      </Text>
      <RangeAddExample />
    </>
  );
}
