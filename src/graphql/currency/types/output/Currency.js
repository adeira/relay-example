// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import globalIdField from '@adeira/graphql-global-id';

export type TSource = {
  +format: string,
  +id: string,
  +rate: number,
};

export default (new GraphQLObjectType({
  name: 'Currency',
  description: 'The currency object. Note this is just mocked data',
  fields: () => ({
    id: globalIdField(({ id }) => id),
    code: {
      type: GraphQLString,
      description: 'The code of the currency ',
      resolve: (payload) => payload.id,
    },
    format: {
      type: GraphQLString,
      description: 'Format string of the currency',
    },
    rate: {
      description: 'Currency rate compared to Euro',
      type: GraphQLFloat,
    },
  }),
  /* $FlowFixMe[value-as-type] This comment suppresses an error when upgrading
   * GraphQL to version 16.x. To see the error delete this comment and run Flow.
   */
}): GraphQLObjectType);
