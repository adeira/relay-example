// @flow

import { LayoutBlock, Text } from '@adeira/sx-design';
import type { Node } from 'react';

import RangeAddExample from '../../mutations/RangeAdd/RangeAdd';

export default function RangeAdd(): Node {
  return (
    <LayoutBlock spacing="large">
      <Text as="h1">Range add mutation</Text>
      <Text>
        This example shows how you can use relays range add config to easily add new object to your
        connections. Try adding a location with the form on the right hand side.
      </Text>
      <RangeAddExample />
    </LayoutBlock>
  );
}
