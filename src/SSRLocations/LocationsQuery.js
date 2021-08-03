// @flow

import { LayoutBlock, Note, Text } from '@adeira/sx-design';
import type { Node } from 'react';
import { graphql, type RecordMap, type GraphQLTaggedNode } from '@adeira/relay';

import LocationsList from './LocationsList';
import QueryRenderer from '../SSRQueryRenderer';
import type { LocationsQueryResponse } from './__generated__/LocationsQuery.graphql';

export const query: GraphQLTaggedNode = graphql`
  query LocationsQuery($first: Int!) {
    locations(first: $first) {
      ...LocationsList
    }
  }
`;

export const variables = {
  first: 20,
};

type Props = {
  +ssrData: RecordMap,
};

export default function LocationsQuery(props: Props): Node {
  return (
    <LayoutBlock spacing="large">
      <Text as="h1">Server Side Rendered Locations</Text>
      <Note>TIP: Disable javascript and reload the page</Note>
      <div>
        <QueryRenderer
          query={query}
          variables={variables}
          onResponse={(renderProps: ?LocationsQueryResponse) => {
            return <LocationsList locations={renderProps?.locations} />;
          }}
          ssrData={props.ssrData}
        />
      </div>
    </LayoutBlock>
  );
}
