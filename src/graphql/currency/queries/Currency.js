// @flow

/* $FlowFixMe[untyped-type-import] This comment suppresses an error when
 * upgrading GraphQL to version 16.x. To see the error delete this comment and
 * run Flow. */
import { GraphQLNonNull, GraphQLString, type GraphQLScalarType } from 'graphql';

import CurrencyType, { type TSource } from '../types/output/Currency';

export default {
  type: CurrencyType,
  description:
    'Detail of a currency. Please note: This is not real data, only Math.random() is return',
  args: {
    code: {
      /* $FlowFixMe[value-as-type] This comment suppresses an error when
       * upgrading Flow to version 0.164.0. To see the error delete this
       * comment and run Flow. */
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
