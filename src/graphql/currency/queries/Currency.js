// @flow

import { GraphQLNonNull, GraphQLString } from 'graphql';

import CurrencyType from '../types/output/Currency';

export default {
  type: CurrencyType,
  description:
    'Detail of a currency. Please note: This is not real data, only Math.random() is return',
  args: {
    code: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The currency code',
    },
  },
  resolve: () => {
    return {
      rate: Math.random(),
      format: '$ __price__',
      id: 'usd',
    };
  },
};
