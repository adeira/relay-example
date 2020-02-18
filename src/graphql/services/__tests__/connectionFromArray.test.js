// @flow

import { offsetToCursor } from 'graphql-relay';

import connectionFromArray from '../connectionFromArray';

// Tests of connectionFromArray are copied from origin implementation:
// https://github.com/graphql/graphql-relay-js/blob/master/src/connection/__tests__/arrayconnection.js
const letters = ['A', 'B', 'C', 'D', 'E'];

it('returns all elements without filters', () => {
  expect(connectionFromArray(letters, {})).toMatchSnapshot();
});

it('respects a smaller first', () => {
  expect(connectionFromArray(letters, { first: 2 })).toMatchSnapshot();
});

it('respects an overly large first', () => {
  expect(connectionFromArray(letters, { first: 10 })).toMatchSnapshot();
});

it('respects a smaller last', () => {
  expect(connectionFromArray(letters, { last: 2 })).toMatchSnapshot();
});

it('respects an overly large last', () => {
  expect(connectionFromArray(letters, { last: 10 })).toMatchSnapshot();
});

it('respects first and after', () => {
  expect(
    connectionFromArray(letters, {
      first: 2,
      after: offsetToCursor(1),
    }),
  ).toMatchSnapshot();
});

it('respects first and after with long first', () => {
  expect(
    connectionFromArray(letters, {
      first: 10,
      after: offsetToCursor(1),
    }),
  ).toMatchSnapshot();
});

it('respects last and before', () => {
  expect(
    connectionFromArray(letters, {
      last: 2,
      before: offsetToCursor(3),
    }),
  ).toMatchSnapshot();
});

it('respects last and before with long last', () => {
  expect(
    connectionFromArray(letters, {
      last: 10,
      before: offsetToCursor(3),
    }),
  ).toMatchSnapshot();
});

it('respects first and after and before, too few', () => {
  expect(
    connectionFromArray(letters, {
      first: 2,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('respects first and after and before, too many', () => {
  expect(
    connectionFromArray(letters, {
      first: 4,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('respects first and after and before, exactly right', () => {
  expect(
    connectionFromArray(letters, {
      first: 3,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('respects last and after and before, too few', () => {
  expect(
    connectionFromArray(letters, {
      last: 2,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('respects last and after and before, too many', () => {
  expect(
    connectionFromArray(letters, {
      last: 4,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('respects last and after and before, exactly right', () => {
  expect(
    connectionFromArray(letters, {
      last: 3,
      after: offsetToCursor(0),
      before: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});

it('throws an error if first < 0', () => {
  expect(() => {
    connectionFromArray(letters, { first: -1 });
  }).toThrow('Argument "first" must be a non-negative integer');
});

it('throws an error if last < 0', () => {
  expect(() => {
    connectionFromArray(letters, { last: -1 });
  }).toThrow('Argument "last" must be a non-negative integer');
});

it('returns all elements if cursors are invalid', () => {
  expect(
    connectionFromArray(letters, {
      before: 'invalid',
      after: 'invalid',
    }),
  ).toMatchSnapshot();
});

it('returns all elements if cursors are on the outside', () => {
  expect(
    connectionFromArray(letters, {
      before: offsetToCursor(6),
      after: offsetToCursor(-1),
    }),
  ).toMatchSnapshot();
});

it('returns no elements if cursors cross', () => {
  expect(
    connectionFromArray(letters, {
      before: offsetToCursor(2),
      after: offsetToCursor(4),
    }),
  ).toMatchSnapshot();
});
