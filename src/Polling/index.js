// @flow

import { useState, type Node, useCallback } from 'react';
import { graphql, QueryRenderer } from '@adeira/relay';
import { isBrowser } from '@adeira/js';

import useInterval from './useInterval';
import type { PollingQuery$data } from './__generated__/PollingQuery.graphql';

export default function Polling(): Node {
  const [abTestEnabled, setAbTest] = useState(false);

  // If we add the polling config on server, the server also keeps polling, which is unnecessary
  const cacheConfig = isBrowser()
    ? { poll: 1000 } // 1 second
    : {};

  useInterval(() => {
    // Please note: this 'useInterval' hook is not used for the polling but for A/B test.
    setAbTest(Math.random() >= 0.5);
  }, 2500);

  const renderPollingResponse = useCallback(
    ({ currency }: PollingQuery$data) => {
      if (!currency) {
        return null;
      }

      const { code, rate, format } = currency;
      const now = new Date().toString();

      return (
        <div title={`Last update: ${now}`}>
          {abTestEnabled && format != null && rate != null ? (
            <>
              Current <em>{code}</em> currency rate: {format.replace('__price__', String(rate))}{' '}
              (compared to EUR)
            </>
          ) : (
            <>Current currency rate: {rate} (compared to EUR)</>
          )}
        </div>
      );
    },
    [abTestEnabled],
  );

  return (
    <QueryRenderer
      fetchPolicy="store-and-network"
      query={graphql`
        query PollingQuery($abTestEnabled: Boolean!) {
          currency(code: "usd") {
            rate
            ... @include(if: $abTestEnabled) {
              code
              format
            }
          }
        }
      `}
      onResponse={renderPollingResponse}
      variables={{ abTestEnabled }}
      cacheConfig={cacheConfig}
    />
  );
}
