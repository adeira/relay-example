// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';
import path from 'path';

import executeTestQuery from '../../../services/executeTestQuery';

function operation(input) {
  return executeTestQuery(input);
}
generateTestsFromFixtures(path.join(__dirname, '__fixtures__'), operation);
