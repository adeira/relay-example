// @flow strict-local

import {
  cursorToOffset,
  connectionFromArray as relayConnectionFromArray,
  offsetToCursor,
  type Connection,
  type ConnectionArguments,
} from '@adeira/graphql-relay';

type Args = {
  ...ConnectionArguments,
  ...
};
// There is open discusion how to handle bidirectional pagination:
// https://github.com/graphql/graphql-relay-js/issues/58
//
// Until Relay devs decide, let's try our implementation
export default function connectionFromArray<T>(data: $ReadOnlyArray<T>, args: Args): Connection<T> {
  const { edges, pageInfo } = relayConnectionFromArray(data, args);
  const firstCursor = offsetToCursor(0);
  const lastCursor = offsetToCursor(data.length - 1);
  const lowerBound = cursorToOffset(pageInfo.startCursor ?? firstCursor);
  const upperBound = cursorToOffset(pageInfo.endCursor ?? lastCursor);

  // there are some data "before" current slice
  if (lowerBound > 0) {
    pageInfo.hasPreviousPage = true;
  }
  // there are some data "after" current slice
  if (upperBound < data.length - 1) {
    pageInfo.hasNextPage = true;
  }

  return { edges, pageInfo };
}
