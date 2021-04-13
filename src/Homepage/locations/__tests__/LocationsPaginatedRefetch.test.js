// @flow

import { graphql, QueryRenderer } from '@adeira/relay';
import { create, act } from 'react-test-renderer';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

import LocationsPaginatedRefetch from '../LocationsPaginatedRefetch';

let environment;

beforeEach(() => {
  environment = createMockEnvironment();
});

const TestRenderer = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query LocationsPaginatedRefetchTestQuery @relay_test_operation {
        ...LocationsPaginatedRefetch
      }
    `}
    variables={{}}
    onResponse={(renderProps) => <LocationsPaginatedRefetch data={renderProps} />}
  />
);

it('refetches data', () => {
  const wrapper = create(<TestRenderer />);

  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      LocationConnection: () => ({
        edges: [
          {
            node: {
              id: '1',
              name: 'Oslo',
              code: 'no',
              countryFlagURL: 'https://images.kiwi.com',
              country: {
                code: 'no',
              },
            },
          },
          {
            node: {
              id: '2',
              name: 'Mexico city',
              code: 'mx',
              countryFlagURL: 'https://images.kiwi.com',
              country: {
                code: 'mx',
              },
            },
          },
        ],
        pageInfo: {
          hasNextPage: true,
        },
      }),
    }),
  );

  const oslo = wrapper.root.findByProps({ dataTest: 'location-Oslo' });
  expect(oslo).toBeDefined();

  const loadMore = wrapper.root.findByProps({ dataTest: 'loadMore' });
  act(() => {
    loadMore.props.onClick();

    environment.mock.resolveMostRecentOperation((operation) =>
      MockPayloadGenerator.generate(operation, {
        LocationConnection: () => ({
          edges: [
            {
              node: {
                id: '3',
                name: 'Prague',
                code: 'prg',
                countryFlagURL: 'https://images.kiwi.com',
                country: {
                  code: 'cz',
                },
              },
            },
          ],
        }),
      }),
    );
  });

  const prague = wrapper.root.findByProps({ dataTest: 'location-Prague' });
  expect(prague).toBeDefined();
});
