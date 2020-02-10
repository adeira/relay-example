// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import locations from './queries/Locations';
import currency from './queries/Currency';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    currency,
    locations,
  },
});
const Schema = new GraphQLSchema({
  query: RootQuery,
});

export default Schema;
