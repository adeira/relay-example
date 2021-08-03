/**
 * @flow
 * @jest-environment jsdom
 */

import { SxDesignProvider } from '@adeira/sx-design';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { RelayEnvironmentProvider } from '@adeira/relay';

import RangeAdd from '../RangeAdd';

let environment;

beforeEach(() => {
  window.scrollTo = jest.fn();
  environment = createMockEnvironment();
});

const edges = [
  {
    node: {
      id: 'loc:1',
      name: 'Oslo',
      type: 'CITY',
    },
  },
  {
    node: {
      id: 'loc:2',
      name: 'Barcelona',
      type: 'CITY',
    },
  },
];

const TestRenderer = () => (
  <SxDesignProvider>
    <RelayEnvironmentProvider environment={environment}>
      <RangeAdd />
    </RelayEnvironmentProvider>
  </SxDesignProvider>
);

it('shows city names in the list', () => {
  render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      LocationConnection: () => ({
        edges,
      }),
    }),
  );

  expect(screen.getByText(/name: barcelona/i)).toBeInTheDocument();
  expect(screen.getByText(/name: oslo/i)).toBeInTheDocument();
});

it('adds a location to the connection', async () => {
  render(<TestRenderer />);
  environment.mock.resolveMostRecentOperation((operation) =>
    MockPayloadGenerator.generate(operation, {
      LocationConnection: () => ({
        edges,
      }),
    }),
  );
  expect(screen.getByText(/name: barcelona/i)).toBeInTheDocument();
  expect(screen.getByText(/name: oslo/i)).toBeInTheDocument();
  expect(screen.queryByText(/name: prague/i)).not.toBeInTheDocument();
  const idInput = screen.getByPlaceholderText('locationId');
  const nameInput = screen.getByPlaceholderText('name');
  const select = screen.getByRole('combobox', { name: /type/i });

  fireEvent.change(idInput, { target: { value: 'OCD' } });
  fireEvent.change(nameInput, { target: { value: 'Prague' } });
  fireEvent.change(select, { target: { value: 'CITY' } });

  fireEvent.click(screen.getByRole('button', { name: /submit/i }));

  const operation = await waitFor(() => environment.mock.getMostRecentOperation());

  act(() => {
    environment.mock.resolve(
      operation,
      MockPayloadGenerator.generate(operation, {
        Location: () => ({
          id: 'loc: 3',
          name: 'Prague',
          type: 'CITY',
        }),
      }),
    );
  });
  expect(screen.getByText(/name: barcelona/i)).toBeInTheDocument();
  expect(screen.getByText(/name: oslo/i)).toBeInTheDocument();
  expect(screen.getByText(/name: prague/i)).toBeInTheDocument();
});
