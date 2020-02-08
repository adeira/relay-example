// @flow

import { connectionDefinitions } from 'graphql-relay';

import GraphQLLocation from './Location';

const { connectionType: AllLocationsConnection } = connectionDefinitions({
  nodeType: GraphQLLocation,
});

export default AllLocationsConnection;
