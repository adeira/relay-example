// @flow strict

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLInterfaceType, GraphQLString } from 'graphql';

export default (new GraphQLInterfaceType({
  name: 'Error',
  description: 'Interface to describe an error',
  fields: {
    message: { type: GraphQLString },
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLInterfaceType);
