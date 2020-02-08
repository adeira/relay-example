// @flow

import { connectionArgs, connectionFromArray } from 'graphql-relay';

import locations from '../datasets/locations.json';
import LocationConnection from '../types/LocationConnection';

type Args = {
  +first?: number,
  +last?: number,
  +after?: string,
  +number?: string,
  ...
};

export default {
  type: LocationConnection,
  args: {
    ...connectionArgs,
  },
  resolve: (_: mixed, args: Args) => {
    // $FlowExpectedError: graphql-relay is not using explicit inexact object
    return connectionFromArray<Location>(locations.locations, args);
  },
};
