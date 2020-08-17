// @flow strict-local

import { type GraphQLObjectType } from 'graphql';
import { connectionDefinitions } from '@adeira/graphql-relay';

import GraphQLLocation from './Location';

const { connectionType: AllLocationsConnection, edgeType: _LocationEdge } = connectionDefinitions({
  nodeType: GraphQLLocation,
});

export const LocationEdge = (_LocationEdge: GraphQLObjectType);
export default (AllLocationsConnection: GraphQLObjectType);
