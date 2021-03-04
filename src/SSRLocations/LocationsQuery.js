// @flow

import type { Node } from 'react';
import { graphql, type RecordMap, type GraphQLTaggedNode } from '@adeira/relay';
import sx from '@adeira/sx';

import Heading from '../components/Heading';
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

type Props = {|
  +ssrData: RecordMap,
|};

export default function LocationsQuery(props: Props): Node {
  return (
    <>
      <Heading level={1}>Server Side Rendered Locations</Heading>
      <hr className={styles('hr')} />
      <p>TIP: Disable javascript and reload the page</p>
      <hr className={styles('hr')} />
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

const styles = sx.create({
  hr: {
    borderWidth: '0.5px',
    margin: 'var(--space-medium) 0',
  },
});
