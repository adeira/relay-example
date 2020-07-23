// @flow

/* eslint-disable no-alert */

import * as React from 'react';
import { TextInput, Box, Button, Select } from 'grommet';
import { graphql, useMutation } from '@adeira/relay';

import type { LocationsFormMutation } from './__generated__/LocationsFormMutation.graphql';

type Props = {|
  +connectionId: string,
|};

type Location = {|
  +locationId: string,
  +name: string,
  +type: string,
|};

const getLocation = (location: Location) => {
  // We have to map the type from string to enum
  let type: 'AIRPORT' | 'CITY' | 'COUNTRY';
  switch (location.type) {
    case 'AIRPORT':
    case 'CITY':
    case 'COUNTRY':
      type = location.type;
      break;
    default:
      throw new Error('You selected a value not in the select field');
  }
  return {
    ...location,
    type,
  };
};

export default (function LocationsForm(props: Props) {
  const [locationId, setLocationId] = React.useState('');
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');
  const [addLocation, loading] = useMutation<LocationsFormMutation>(graphql`
    mutation LocationsFormMutation($location: AddLocationInput!, $connections: [String!]!) {
      addLocation(location: $location) {
        __typename
        ... on AddLocationResponse {
          locationEdge @prependEdge(connections: $connections) {
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
    if (type === '') {
      alert('You must select a type');
      return;
    }
    addLocation({
      variables: {
        location: getLocation({ type, name, locationId }),
        connections: [props.connectionId],
      },
      onCompleted: (res, errors) => {
        if (errors != null) {
          alert(errors.map((e) => e.message).join(','));
        } else if (
          res.addLocation?.__typename === 'AddLocationError' &&
          res.addLocation.message != null
        ) {
          alert(res.addLocation.message);
        } else {
          setType('');
          setName('');
          setLocationId('');
        }
      },
    });
  };

  return (
    <>
      <h3>Add a location</h3>
      <form onSubmit={onSubmit}>
        <Box gap="small">
          <TextInput
            placeholder="locationId"
            name="locationId"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
          />
          <TextInput
            placeholder="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            options={['AIRPORT', 'CITY', 'COUNTRY']}
            name="type"
            placeholder="type"
            value={type}
            onChange={(option) => {
              setType(option.value);
            }}
          />
          <Button label="Submit" disabled={loading} type="submit" primary />
        </Box>
      </form>
    </>
  );
}: React.ComponentType<Props>);
