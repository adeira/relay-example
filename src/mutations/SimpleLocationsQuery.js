// @flow strict-local

import * as React from 'react';
import { QueryRenderer, graphql } from '@adeira/relay';

import LocationsList from './LocationsList';
import type { SimpleLocationsQueryResponse } from './__generated__/SimpleLocationsQuery.graphql';

type Props = {||};

export default (function LocationsQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query SimpleLocationsQuery {
          ...LocationsList_data
        }
      `}
      variables={{}}
      onResponse={(data: SimpleLocationsQueryResponse) => <LocationsList data={data} />}
    />
  );
}: React.ComponentType<Props>);
