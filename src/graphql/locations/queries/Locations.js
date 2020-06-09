// @flow

import { connectionArgs, type ConnectionArguments } from '@adeira/graphql-relay';

import connectionFromArray from '../../services/connectionFromArray';
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
