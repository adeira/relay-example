// @flow

const path = require('path');
const babelJest = require('babel-jest').default; // https://github.com/facebook/jest/issues/11444

module.exports = (babelJest.createTransformer(
  require(path.join(__dirname, '..', '..', '.babelrc.js')),
) /*: any */);
