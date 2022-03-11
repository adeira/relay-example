// @flow strict

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLObjectType, GraphQLString } from 'graphql';

import ErrorInterface from '../../../types/Error';

// TODO: Improve with some fields better explaining the error(s)
export default (new GraphQLObjectType({
  name: 'AddLocationError',
  description: 'Response type indicating an error',
  interfaces: [ErrorInterface],
  fields: {
    message: {
      type: GraphQLString,
      resolve: () =>
        'Please check your input, you must provide a name, and locationId must be a 3 letter code',
    },
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
