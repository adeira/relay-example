// @flow strict-local

/* $FlowFixMe[untyped-type-import] This comment suppresses an error when
 * upgrading GraphQL to version 16.x. To see the error delete this comment and
 * run Flow. */
import { type GraphQLObjectType } from 'graphql';
import { connectionDefinitions } from '@adeira/graphql-relay';

import GraphQLLocation from './Location';

const { connectionType: AllLocationsConnection, edgeType: _LocationEdge } = connectionDefinitions({
  nodeType: GraphQLLocation,
});

/* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
export const LocationEdge = (_LocationEdge: GraphQLObjectType);
/* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
export default (AllLocationsConnection: GraphQLObjectType);
