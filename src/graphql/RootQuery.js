// @flow strict-local

/* $FlowFixMe[untyped-import] This comment suppresses an error when upgrading
 * GraphQL to version 16.x. To see the error delete this comment and run Flow.
 */
import { GraphQLObjectType } from 'graphql';

import locations from './locations/queries/Locations';
import currency from './currency/queries/Currency';

export default (new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    currency,
    locations,
  },
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
