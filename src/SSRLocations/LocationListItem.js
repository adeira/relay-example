// @flow

import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';

import type { LocationListItem$key } from './__generated__/LocationListItem.graphql';

type Props = {|
  +location: ?LocationListItem$key,
|};

export default function LocationListItem(props: Props): Node {
  const location = useFragment(
    graphql`
      fragment LocationListItem on Location {
        name
      }
    `,
    props.location,
  );

  return <div>{location?.name}</div>;
}
