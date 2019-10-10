// @flow strict

// This configuration is merged with the project configuration defined
// in this monorepo root.
module.exports = {
  rootDir: __dirname,
  transform: {
    '^.+\\.js$': '<rootDir>/scripts/jest/custom-transformer.js',
  },
};
