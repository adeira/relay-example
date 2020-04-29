// @flow

import React from 'react';
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
    // $FlowFixMe errors after upgrading to relay 9.1.0
    environment={environment}
    query={graphql`
      query LocationsPaginatedRefetchTestQuery @relay_test_operation {
        ...LocationsPaginatedRefetch_data
      }
    `}
    variables={{}}
    onResponse={renderProps => <LocationsPaginatedRefetch data={renderProps} />}
  />
);

it('refetches data', () => {
  const wrapper = create(<TestRenderer />);

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      LocationConnection: () => ({
        edges: [
          {
            node: {
              id: '1',
              name: 'Oslo',
              code: 'no',
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
              country: {
                code: 'mx',
              },
            },
          },
        ],
      }),
    }),
  );

  const oslo = wrapper.root.findByProps({ dataTest: 'location-Oslo' });
  expect(oslo).toBeDefined();

  const loadMore = wrapper.root.findByProps({ dataTest: 'loadMore' });
  act(() => {
    loadMore.props.onClick();
  });

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      LocationConnection: () => ({
        edges: [
          {
            node: {
              id: '3',
              name: 'Prague',
              code: 'prg',
              country: {
                code: 'cz',
              },
            },
          },
        ],
      }),
    }),
  );

  const prague = wrapper.root.findByProps({ dataTest: 'location-Prague' });
  expect(prague).toBeDefined();
});
