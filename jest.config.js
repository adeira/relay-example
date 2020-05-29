// @flow strict

const path = require('path');

// This configuration is merged with the project configuration defined
// in this monorepo root.
module.exports = {
  rootDir: __dirname,
  testMatch: ['<rootDir>/**/__tests__/**/?(*.)+(spec|test).js?(x)'], // @x-shipit-enable
  transform: { '^.+\\.js$': '<rootDir>/scripts/jest/custom-transformer.js' }, // @x-shipit-disable,
  setupFilesAfterEnv: [path.join(__dirname, 'scripts', 'jest', 'setupTests.js')],
};
