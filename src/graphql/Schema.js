// @flow strict-local

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';
import RootMutation from './RootMutation';

/* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
const Schema: GraphQLSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});

export default Schema;
