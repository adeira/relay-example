// @flow strict-local

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLObjectType } from 'graphql';

import addLocation from './locations/mutations/AddLocation';

export default (new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    addLocation,
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
