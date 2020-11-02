// @flow

import type { Node } from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@adeira/relay';
import { TransitionGroup } from 'react-transition-group';
import * as sx from '@adeira/sx';

import type { LocationsList_data as Data } from './__generated__/LocationsList_data.graphql';
import FadeIn from './FadeIn';
import LocationsForm from './RangeAdd/LocationsForm';
import { tablet } from '../components/breakpoints';
import Heading from '../components/Heading';

type Props = {|
  +data: Data,
|};

function LocationsList(props: Props) {
  return (
    <div className={styles('grid')}>
      <div>
        <LocationsForm connectionId={props.data.locations?.__id ?? ''} />
      </div>
      <div>
        <Heading level={3}>My favorite locations</Heading>
        <TransitionGroup component={null} className="location-list">
          {props.data.locations?.edges?.map<Node>((edge) => (
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
    gap: 'var(--space-x-large)',
    gridTemplateColumns: '1fr',
    [tablet]: {
      gridTemplateColumns: 'repeat(2,minmax(auto,1fr))',
    },
  },
});

export default (createFragmentContainer(LocationsList, {
  data: graphql`
    fragment LocationsList_data on RootQuery {
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
}): FragmentContainerType<Props>);
