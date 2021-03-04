// @flow strict-local

import type { ComponentType } from 'react';
import { QueryRenderer, graphql } from '@adeira/relay';

import LocationsList from './LocationsList';
import type { SimpleLocationsQueryResponse } from './__generated__/SimpleLocationsQuery.graphql';

type Props = {||};

export default (function LocationsQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query SimpleLocationsQuery {
          ...LocationsListSimple
        }
      `}
      onResponse={(data: SimpleLocationsQueryResponse) => <LocationsList data={data} />}
    />
  );
}: ComponentType<Props>);
