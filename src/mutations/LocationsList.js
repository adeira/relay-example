// @flow

import { Text } from '@adeira/sx-design';
import type { Node } from 'react';
import { graphql, useFragment } from '@adeira/relay';
import { TransitionGroup } from 'react-transition-group';
import sx from '@adeira/sx';

// eslint-disable-next-line n/file-extension-in-import -- https://github.com/weiran-zsd/eslint-plugin-node/issues/11
import FadeIn from './FadeIn';
import LocationsForm from './RangeAdd/LocationsForm';
import { tablet } from '../components/breakpoints';
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
        <TransitionGroup component={null} className="location-list">
          {data.locations?.edges?.map((edge) => (
            <FadeIn key={edge?.node?.id} timeout={320}>
              <div style={{ padding: '12px', borderBottom: '1px solid black' }}>
                <div>
                  name: {edge?.node?.name}, type: {edge?.node?.type}
                </div>
              </div>
            </FadeIn>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
}

const styles = sx.create({
  grid: {
    display: 'grid',
    gap: 'var(--sx-spacing-large)',
    gridTemplateColumns: '1fr',
    [tablet]: {
      gridTemplateColumns: 'repeat(2,minmax(auto,1fr))',
    },
  },
});
