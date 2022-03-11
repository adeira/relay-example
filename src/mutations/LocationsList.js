// @flow

import { Text } from '@adeira/sx-design';
import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';
import sx from '@adeira/sx';

import LocationsForm from './RangeAdd/LocationsForm';
import type { LocationsListSimple$key } from './__generated__/LocationsListSimple.graphql';

type Props = {
  +data: LocationsListSimple$key,
};

export default function LocationsList(props: Props): Node {
  const data = useFragment(
    graphql`
      fragment LocationsListSimple on RootQuery {
        locations(first: 3) @connection(key: "LocationsList_locations") {
          __id
          edges {
            node {
              id
              name
              type
            }
          }
        }
      }
    `,
    props.data,
  );

  return (
    <div className={styles('grid')}>
      <div>
        <LocationsForm connectionId={data.locations?.__id ?? ''} />
      </div>
      <div>
        <Text as="h3">My favorite locations</Text>
        {data.locations?.edges?.map((edge) => (
          <div key={edge?.node?.id} style={{ padding: '12px', borderBottom: '1px solid black' }}>
            name: {edge?.node?.name}, type: {edge?.node?.type}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = sx.create({
  grid: {
    display: 'grid',
    gap: 'var(--sx-spacing-large)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))',
  },
});
