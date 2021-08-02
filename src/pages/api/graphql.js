// @flow

import { ApolloServer } from 'apollo-server-micro';
import Cors from 'cors';
import { IncomingMessage, ServerResponse } from 'http';

import schema from '../../graphql/Schema';

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

// https://github.com/vercel/next.js/blob/26981aa54c769734a8dc31316fb660c446fe53b9/examples/api-routes-cors/pages/api/cors.js
const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

// https://nextjs.org/docs/api-routes/api-middlewares
export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({ schema, introspection: true, playground: true });
const startServer = apolloServer.start();

export default async function graphql(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<$FlowFixMe> {
  await cors(req, res);
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
