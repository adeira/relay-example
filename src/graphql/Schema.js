// @flow strict-local

import { GraphQLSchema } from 'graphql';

import RootQuery from './RootQuery';

const Schema = new GraphQLSchema({
  query: RootQuery,
});

export default Schema;
