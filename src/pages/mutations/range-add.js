// @flow

import type { Node } from 'react';

import RangeAddExample from '../../mutations/RangeAdd/RangeAdd';
import Heading from '../../components/Heading';
import Text from '../../components/Text';

export default function RangeAdd(): Node {
  return (
    <>
      <Heading level={1}>Range add mutation</Heading>
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
