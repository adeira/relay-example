// @flow

import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';

import LocationListItem from './LocationListItem';
import type { LocationsList$key } from './__generated__/LocationsList.graphql';

type Props = {
  +locations: ?LocationsList$key,
};

export default function LocationsList(props: Props): Node {
  const locations = useFragment(
    graphql`
      fragment LocationsList on LocationConnection {
        edges {
          node {
            id
            ...LocationListItem
          }
        }
      }
    `,
    props.locations,
  );

  return (
    locations?.edges?.map((edge) => (
      <LocationListItem key={edge?.node?.id} location={edge?.node} />
    )) ?? null
  );
}
