// @flow

/* eslint-disable no-alert */

import { useState, type ComponentType } from 'react';
import { graphql, useMutation } from '@adeira/relay';
import * as sx from '@adeira/sx';

import type { LocationsFormMutation } from './__generated__/LocationsFormMutation.graphql';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Heading from '../../components/Heading';

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
  const [locationId, setLocationId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
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
      <Heading level={3}>Add a location</Heading>
      <form onSubmit={onSubmit}>
        <div className={styles('formContainer')}>
          <TextInput
            placeholder="locationId"
            label="locationId"
            name="locationId"
            value={locationId}
            onChange={setLocationId}
          />
          <TextInput placeholder="name" label="name" name="name" value={name} onChange={setName} />
          <Select
            name="type"
            placeholder="type"
            onChange={setType}
            label="type"
            options={[
              { label: 'Airport', value: 'AIRPORT' },
              { label: 'City', value: 'CITY' },
              { label: 'Country', value: 'COUNTRY' },
            ]}
          />
          <Button disabled={loading} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}: ComponentType<Props>);

const styles = sx.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-small)',
  },
});
