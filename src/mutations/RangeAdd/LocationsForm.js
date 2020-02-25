// @flow strict-local

/* eslint-disable no-alert */

import * as React from 'react';
import { InputField, Stack, Button, Select } from '@kiwicom/orbit-components';
import { graphql, useMutation } from '@adeira/relay';

import type { LocationsFormMutation } from './__generated__/LocationsFormMutation.graphql';

type Props = {||};

type State = {|
  +name: string,
  +locationId: string,
  +type: string,
|};
type Action =
  | SyntheticInputEvent<HTMLInputElement>
  | SyntheticInputEvent<HTMLSelectElement>
  | 'reset';
const initialState = { name: '', locationId: '', type: '' };
function reducer(state: State, action: Action) {
  if (action === 'reset') {
    return initialState;
  }
  return {
    ...state,
    [action.target.name]: action.target.value,
  };
}

const configs = [
  {
    type: 'RANGE_ADD',
    parentID: 'client:root',
    edgeName: 'locationEdge',
    connectionInfo: [
      {
        key: 'LocationsList_locations',
        rangeBehavior: 'prepend',
      },
    ],
  },
];

const getLocation = (state: State) => {
  // We have to map the type from string to enum
  let type: 'AIRPORT' | 'CITY' | 'COUNTRY';
  switch (state.type) {
    case 'AIRPORT':
    case 'CITY':
    case 'COUNTRY':
      type = state.type;
      break;
    default:
      throw new Error('You selected a value not in the select field');
  }
  return {
    ...state,
    type,
  };
};

export default (function LocationsForm() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [addLocation, loading] = useMutation<LocationsFormMutation>(graphql`
    mutation LocationsFormMutation($location: AddLocationInput!) {
      addLocation(location: $location) {
        __typename
        ... on AddLocationResponse {
          locationEdge {
            node {
              locationId
              name
              id
              type
            }
          }
        }
        ... on Error {
          message
        }
      }
    }
  `);
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.type === '') {
      alert('You must select a type');
      return;
    }
    addLocation({
      configs,
      variables: { location: getLocation(state) },
      onCompleted: (res, errors) => {
        if (errors != null) {
          alert(errors.map(e => e.message).join(','));
        } else if (
          res.addLocation?.__typename === 'AddLocationError' &&
          res.addLocation.message != null
        ) {
          alert(res.addLocation.message);
        } else {
          dispatch('reset');
        }
      },
    });
  };
  const handleChange = e => {
    e.persist();
    dispatch(e);
  };
  return (
    <>
      <h3>Add a location</h3>
      <form onSubmit={onSubmit}>
        <Stack spacing="condensed">
          <InputField
            placeholder="locationId"
            name="locationId"
            value={state.locationId}
            onChange={handleChange}
          />
          <InputField placeholder="name" name="name" value={state.name} onChange={handleChange} />
          <Select
            options={[
              { value: 'AIRPORT', label: 'airport' },
              { value: 'CITY', label: 'city' },
              { value: 'COUNTRY', label: 'country' },
            ]}
            name="type"
            placeholder="type"
            value={state.type}
            onChange={handleChange}
          />
          <Button loading={loading} submit={true} type="info">
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}: React.ComponentType<Props>);
