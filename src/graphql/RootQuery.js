// @flow strict-local

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
}): GraphQLObjectType);
