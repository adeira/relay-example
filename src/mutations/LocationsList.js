// @flow

import * as React from 'react';
import { createFragmentContainer, graphql, type FragmentContainerType } from '@adeira/relay';
import { TransitionGroup } from 'react-transition-group';
import { Grid, Box } from 'grommet';

import type { LocationsList_data as Data } from './__generated__/LocationsList_data.graphql';
import FadeIn from './FadeIn';
import LocationsForm from './RangeAdd/LocationsForm';

type Props = {|
  +data: Data,
|};

function LocationsList(props: Props) {
  return (
    <Grid columns={{ count: 2, size: 'auto' }} gap="medium">
      <Box>
        <>
          <h3>My favorite locations</h3>
          <TransitionGroup component={null} className="location-list">
            {props.data.locations?.edges?.map<React.Node>((edge) => (
              <FadeIn key={edge?.node?.id} timeout={320}>
                <div style={{ padding: '12px', borderBottom: '1px solid black' }}>
                  <div>
                    name: {edge?.node?.name}, type: {edge?.node?.type}
                  </div>
                </div>
              </FadeIn>
            ))}
          </TransitionGroup>
        </>
      </Box>
      <Box>
        <LocationsForm connectionId={props.data.locations?.__id ?? ''} />
      </Box>
    </Grid>
  );
}

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
