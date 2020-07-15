// @flow strict-local

import path from 'path';
import testBC from '@adeira/graphql-bc-checker';

import Schema from '../src/graphql/Schema';

testBC({
  allowBreakingChanges: false,
  snapshotLocation: path.join(__dirname, '..', 'schema.graphql'),
  schema: Schema,
});
