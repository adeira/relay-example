// @flow

import { generateTestsFromFixtures } from '@adeira/test-utils';

import executeTestQuery from '../../../services/executeTestQuery';

function operation(input) {
  return executeTestQuery(input);
}
generateTestsFromFixtures(`${__dirname}/__fixtures__`, operation);
