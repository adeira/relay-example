// @flow

const path = require('path');
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer(
  // $FlowAllowDynamicImport
  require(path.join(__dirname, '..', '..', '.babelrc.js')),
);
