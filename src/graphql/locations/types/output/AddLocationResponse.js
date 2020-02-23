// @flow strict-local

import { GraphQLObjectType } from 'graphql';

import { LocationEdge } from './LocationConnection';

export default new GraphQLObjectType({
  name: 'AddLocationResponse',
  description:
    'The newly created location edge that can be automatically added into a connection by Relay',
  fields: {
    locationEdge: {
      type: LocationEdge,
      resolve: ({ location }) => {
        return { node: location };
      },
    },
  },
});
