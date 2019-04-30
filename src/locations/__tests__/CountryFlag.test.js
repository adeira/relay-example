// @flow

import * as React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer, graphql } from '@kiwicom/relay';

import CountryFlag from '../CountryFlag';

let environment;
let onResponse;

beforeEach(() => {
  environment = createMockEnvironment();
  onResponse = props => {
    return <CountryFlag location={props.location} />;
  };
});

it('renders Flag component as expected', () => {
  const renderer = ReactTestRenderer.create(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CountryFlagTestSuccessQuery @relay_test_operation {
          location(input: { locationId: "test-location-id" }) {
            ...CountryFlag_location
          }
        }
      `}
      onResponse={onResponse}
    />,
  );

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      LocationArea: () => ({
        code: 'CZ',
      }),
    }),
  );

  const flag = renderer.root.findByProps({ dataTest: 'flag-success' });
  expect(flag).toBeDefined();
  expect(flag.props.code).toBe('CZ');
  expect(flag.props.name).toBe('<mock-value-for-field-"name">');
});

it('renders Flag with code "anywhere" for special type', () => {
  const renderer = ReactTestRenderer.create(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CountryFlagTestAnywhere1Query @relay_test_operation {
          location(input: { locationId: "test-location-id" }) {
            ...CountryFlag_location
          }
        }
      `}
      onResponse={onResponse}
    />,
  );

  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Location: () => ({
        type: 'special',
      }),
    }),
  );

  const flag = renderer.root.findByProps({ dataTest: 'flag-anywhere' });
  expect(flag).toBeDefined();
  expect(flag.props.code).toBe('anywhere');
  expect(flag.props.name).toBeUndefined();
});

it('renders Flag with code "anywhere" if location is missing', () => {
  const renderer = ReactTestRenderer.create(
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CountryFlagTestAnywhere2Query @relay_test_operation {
          location(input: { locationId: "test-location-id" }) {
            ...CountryFlag_location
          }
        }
      `}
      onResponse={onResponse}
    />,
  );

  // Alternatively we could just unwrap the component and pass null directly
  // without calling QueryRenderer with environment.
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Location: () => null,
    }),
  );

  const flag = renderer.root.findByProps({ dataTest: 'flag-anywhere' });
  expect(flag).toBeDefined();
  expect(flag.props.code).toBe('anywhere');
  expect(flag.props.name).toBeUndefined();
});
