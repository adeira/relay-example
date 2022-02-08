// @flow strict-local

import type { ComponentType } from 'react';
import { QueryRenderer, graphql } from '@adeira/relay';

import LocationsList from './LocationsList';
import type { SimpleLocationsQuery$data } from './__generated__/SimpleLocationsQuery.graphql';

type Props = {};

export default (function LocationsQuery() {
  return (
    <QueryRenderer
      query={graphql`
        query SimpleLocationsQuery {
          ...LocationsListSimple
        }
      `}
      onResponse={(data: SimpleLocationsQuery$data) => <LocationsList data={data} />}
    />
  );
}: ComponentType<Props>);
