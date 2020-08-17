// @flow

import { ApolloServer } from 'apollo-server-micro';

import schema from '../../graphql/Schema';

const apolloServer = new ApolloServer({ schema, introspection: true, playground: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (apolloServer.createHandler({ path: '/api/graphql' }): any);
