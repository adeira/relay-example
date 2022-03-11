// @flow strict-local

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLObjectType } from 'graphql';

import { LocationEdge } from './LocationConnection';

export default (new GraphQLObjectType({
  name: 'AddLocationResponse',
  description:
    'The newly created location edge that can be automatically added into a connection by Relay',
  fields: {
    locationEdge: {
      type: LocationEdge,
      resolve: ({ location }) => {
        return { node: location };
      },
    },
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
