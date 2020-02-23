// @flow strict-local

import { GraphQLObjectType } from 'graphql';

import addLocation from './locations/mutations/AddLocation';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation.',
  fields: {
    addLocation,
  },
});
