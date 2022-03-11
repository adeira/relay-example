// @flow

import { type Node } from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';

import type { PollingQuery$data } from './__generated__/PollingQuery.graphql';

export default function Polling(): Node {
  return (
    <QueryRenderer
      fetchPolicy="store-and-network"
      query={graphql`
        query PollingQuery @live_query(polling_interval: 500) {
          currency(code: "usd") @required(action: LOG) {
            rate @required(action: LOG)
          }
        }
      `}
      onResponse={({ currency }: PollingQuery$data) => {
        return (
          <>
            <div>
              Current currency rate: <strong>{currency.rate}</strong>
            </div>
            <div>Last update: {new Date().toString()}</div>
          </>
        );
      }}
    />
  );
}
