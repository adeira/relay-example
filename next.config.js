// @flow

const path = require('path');
const withTranspileModules = require('next-transpile-modules');
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config');

// @x-shipit-disable: const getTranspileWorkspaces = require('./scripts/getTranspileWorkspaces');

// @x-shipit-disable: const transpileWorkspaces = getTranspileWorkspaces();
const transpileWorkspaces = []; // @x-shipit-enable

module.exports = (withCustomBabelConfigFile(
  withTranspileModules(transpileWorkspaces)({
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
  }),
) /*: any */);
