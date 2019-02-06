// @flow

import React, { Component } from 'react';
// TODO: import createFragmentContainer from '@kiwicom/relay'
import { graphql, createFragmentContainer } from 'react-relay';
import type { AllLocations as AllLocationsDataType } from '__generated__/AllLocations.graphql';

import Location from './Location';

type Props = {|
  +data: AllLocationsDataType,
|};

class AllLocations extends Component<Props> {
  render() {
    const edges = this.props.data.allLocations?.edges ?? [];
    return (
      <ol>
        {edges.map(edge => {
          if (edge) {
            return <Location key={edge.node?.id} data={edge.node} />;
          }
          return null; // or some failure placeholder
        })}
      </ol>
    );
  }
}

export default createFragmentContainer(
  AllLocations,
  graphql`
    fragment AllLocations on RootQuery {
      allLocations(first: 10) {
        edges {
          node {
            id(opaque: false)
            ...Location
          }
        }
      }
    }
  `,
);
