// @flow

const path = require('path');
const withTranspileModules = require('next-plugin-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    babelConfigFile: path.join(__dirname, '.babelrc'),
    transpileModules: ['@kiwicom'],
  }),
);
