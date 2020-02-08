// @flow

import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import locations from './queries/Locations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    locations,
  },
});
const Schema = new GraphQLSchema({
  query: RootQuery,
});

export default Schema;
