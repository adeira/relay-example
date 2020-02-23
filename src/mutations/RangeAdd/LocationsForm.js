// @flow strict-local

/* eslint-disable no-alert */

import * as React from 'react';
import { InputField, Stack, Button, Select } from '@kiwicom/orbit-components';
import { useRelayEnvironment } from '@adeira/relay';

import addLocation from './addLocation';
import type { addLocationMutationResponse } from './__generated__/addLocationMutation.graphql';

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
  const [loading, setLoading] = React.useState(false);
  const env = useRelayEnvironment();
  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.type === '') {
      alert('You must select a type');
      return;
    }
    setLoading(true);
    addLocation(
      env,
      { location: getLocation(state) },
      (res: addLocationMutationResponse, errors: ?$ReadOnlyArray<Error>) => {
        setLoading(false);
        if (errors != null) {
          alert(errors.map(e => e.message).join(','));
        } else if (res.addLocation?.message != null) {
          alert(res.addLocation.message);
        } else {
          dispatch('reset');
        }
      },
    );
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
