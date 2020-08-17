// @flow strict

import { GraphQLInterfaceType, GraphQLString } from 'graphql';

export default (new GraphQLInterfaceType({
  name: 'Error',
  description: 'Interface to describe an error',
  fields: {
    message: { type: GraphQLString },
  },
}): GraphQLInterfaceType);
