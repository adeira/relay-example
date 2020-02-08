// @flow

import React from 'react';
import { graphql, type RecordMap } from '@adeira/relay';
import styled from 'styled-components';

import QueryRenderer from '../SSRQueryRenderer';
import type { LocationsQueryResponse } from './__generated__/LocationsQuery.graphql';
import LocationsList from './LocationsList';

export const query = graphql`
  query LocationsQuery($first: Int!) {
    allLocations(first: $first) {
      ...LocationsList_locations
    }
  }
`;

export const variables = {
  first: 20,
};

type Props = {|
  +ssrData: RecordMap,
|};

export default function LocationsQuery(props: Props) {
  return (
    <>
      <Heading>Server Side Rendered Locations</Heading>
      <hr />
      <p>TIP: Disable javascript and reload the page</p>
      <hr />
      <QueryRenderer
        query={query}
        variables={variables}
        onResponse={(renderProps: ?LocationsQueryResponse) => {
          return <LocationsList locations={renderProps?.allLocations} />;
        }}
        ssrData={props.ssrData}
      />
    </>
  );
}

const Heading = styled.h1`
  font-family: 'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI',
    'Helvetica Neue', 'Lucida Grande', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #252a31;
  line-height: 28px;
`;
