const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  rules: {
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: '@kiwicom/graphql-skymock',
            message:
              'You should never require GraphQL Skymock directly. This service is being used automatically in the test environment.',
          },
          {
            name: 'react-relay',
            message: 'Use @kiwicom/relay instead.',
          },
        ],
      },
    ],
  },
};
