// @flow

import { GraphQLObjectType, GraphQLString, GraphQLFloat } from 'graphql';
import globalIdField from '@adeira/graphql-global-id';

export default new GraphQLObjectType({
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
});
