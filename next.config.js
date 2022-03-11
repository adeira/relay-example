// @flow

const path = require('path');
const withTranspileModules = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');
const withPlugins = require('next-compose-plugins');

module.exports = (withPlugins(
  [
    withCustomBabelConfigFile,
    withTranspileModules([
      '@adeira/css-colors',
      '@adeira/fetch',
      '@adeira/graphql-global-id',
      '@adeira/graphql-relay',
      '@adeira/icons',
      '@adeira/js',
      '@adeira/murmur-hash',
      '@adeira/relay',
      '@adeira/sx',
      '@adeira/sx-design',
    ]),
  ],
  {
    images: {
      domains: ['images.kiwi.com'],
    },
    babelConfigFile: path.join(
      __dirname,
      'babel.config.js', // @x-shipit-enable
      // @x-shipit-disable: '.babelrc.js',
    ),
    webpack: (config) => {
      config.module.rules.push({
        type: 'javascript/auto',
        test: /\.mjs$/,
      });

      return config;
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    experimental: {
      esmExternals: 'loose',
    },
  },
) /*: any  */);
