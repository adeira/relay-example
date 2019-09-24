// @flow

import React from 'react';
import { graphql, QueryRenderer } from '@kiwicom/relay';

import type { PollingQueryResponse } from './__generated__/PollingQuery.graphql';

function renderPollingResponse({ currency }: PollingQueryResponse) {
  if (!currency) {
    return null;
  }

  const { code, rate } = currency;
  const now = new Date().toString();

  return (
    <div title={`Last update: ${now}`}>
      Current <em>{code}</em> currency rate: {rate}
    </div>
  );
}

export default function Polling() {
  const cacheConfig = {
    poll: 1000, // 1 second
  };

  return (
    <QueryRenderer
      query={graphql`
        query PollingQuery {
          currency(code: "usd") {
            code
            rate
          }
        }
      `}
      cacheConfig={cacheConfig}
      onResponse={renderPollingResponse}
    />
  );
}
