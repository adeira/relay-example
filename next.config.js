// @flow

const path = require('path');
const withTranspileModules = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');

module.exports = (withCustomBabelConfigFile(
  withTranspileModules([
    '@adeira/css-colors',
    '@adeira/fetch',
    '@adeira/graphql-bc-checker',
    '@adeira/graphql-global-id',
    '@adeira/graphql-relay',
    '@adeira/js',
    '@adeira/monorepo-utils',
    '@adeira/relay',
    '@adeira/relay-runtime',
    '@adeira/relay-utils',
    '@adeira/sx',
    '@adeira/test-utils',
  ])({
    images: {
      domains: ['images.kiwi.com'],
    },
    babelConfigFile: path.join(
      __dirname,
      'babel.config.js', // @x-shipit-enable
      // @x-shipit-disable: '.babelrc',
    ),
    webpack: (config) => {
      config.module.rules.push({
        type: 'javascript/auto',
        test: /\.mjs$/,
      });

      return config;
    },
  }),
) /*: any */);
