// @flow

import { ApolloServer } from 'apollo-server-micro';
import Cors from 'cors';
import { IncomingMessage, ServerResponse } from 'http';

import schema from '../../graphql/Schema';

const apolloServer = new ApolloServer({ schema, introspection: true, playground: true });
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function graphql(req: IncomingMessage, res: ServerResponse): Promise<empty> {
  await cors(req, res);

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
