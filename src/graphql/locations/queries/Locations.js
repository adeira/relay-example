// @flow

import {
  connectionArgs,
  connectionFromArray,
  type Connection,
  type ConnectionArguments,
} from '@adeira/graphql-relay';

import locations from '../datasets/locations.json';
import LocationConnection from '../types/output/LocationConnection';

export default {
  type: LocationConnection,
  args: {
    ...connectionArgs,
  },
  resolve: (_: mixed, args: { ...ConnectionArguments, ... }): Connection<Location> => {
    return connectionFromArray<Location>(locations.locations, args);
  },
};
