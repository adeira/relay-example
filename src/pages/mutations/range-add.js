// @flow strict-local

import * as React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components';

import RangeAddExample from '../../mutations/RangeAdd/RangeAdd';

export default function RangeAdd() {
  return (
    <>
      <Heading element="h1">Range add mutation</Heading>
      <Text>
        This example shows how you can use relays range add config to easily add new object to your
        connections
        <br />
        Try adding a location with the form on the right hand side
      </Text>
      <RangeAddExample />
    </>
  );
}
