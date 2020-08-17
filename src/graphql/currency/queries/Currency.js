// @flow

import { GraphQLNonNull, GraphQLString, type GraphQLScalarType } from 'graphql';

import CurrencyType, { type TSource } from '../types/output/Currency';

export default {
  type: CurrencyType,
  description:
    'Detail of a currency. Please note: This is not real data, only Math.random() is return',
  args: {
    code: {
      type: (new GraphQLNonNull(GraphQLString): GraphQLNonNull<GraphQLScalarType>),
      description: 'The currency code',
    },
  },
  resolve: (): TSource => {
    return {
      rate: Math.random(),
      format: '$ __price__',
      id: 'usd',
    };
  },
};
