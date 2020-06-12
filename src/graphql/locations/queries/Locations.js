// @flow

import {
  connectionArgs,
  type ConnectionArguments,
  connectionFromArray,
} from '@adeira/graphql-relay';

import locations from '../datasets/locations.json';
import LocationConnection from '../types/output/LocationConnection';

export default {
  type: LocationConnection,
  args: {
    ...connectionArgs,
  },
  resolve: (_: mixed, args: { ...ConnectionArguments, ... }) => {
    return connectionFromArray<Location>(locations.locations, args);
  },
};
