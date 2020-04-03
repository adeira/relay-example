// @flow

import React from 'react';
import { graphql, type RecordMap } from '@adeira/relay';
import styled from 'styled-components';

import QueryRenderer from '../SSRQueryRenderer';
import type { LocationsQueryResponse } from './__generated__/LocationsQuery.graphql';
import LocationsList from './LocationsList';

export const query = graphql`
  query LocationsQuery($first: Int!) {
    locations(first: $first) {
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
      <Separator />
      <Paragraph>TIP: Disable javascript and reload the page</Paragraph>
      <Separator />
      <QueryRenderer
        query={query}
        variables={variables}
        onResponse={(renderProps: ?LocationsQueryResponse) => {
          return <LocationsList locations={renderProps?.locations} />;
        }}
        ssrData={props.ssrData}
      />
    </>
  );
}

const Paragraph = styled.p`
  padding: 0;
  margin: 0;
`;

const Separator = styled.hr`
  border-width: 0.5px;
  margin: 16px 0;
`;

const Heading = styled.h1`
  font-family: 'Roboto', -apple-system, '.SFNSText-Regular', 'San Francisco', 'Segoe UI',
    'Helvetica Neue', 'Lucida Grande', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: #252a31;
  line-height: 28px;
`;
