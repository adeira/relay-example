// @flow

/* global window */

import React from 'react';
import {
  graphql,
  QueryRenderer,
  commitLocalUpdate,
  createEnvironment,
  createNetworkFetcher,
} from '@kiwicom/relay';
import { ROOT_ID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies
import { InputField, Textarea, Heading, Text, Separator, Stack } from '@kiwicom/orbit-components';

import type { LocalFormQueryResponse } from './__generated__/LocalFormQuery.graphql';

const environment = createEnvironment({
  fetchFn: createNetworkFetcher('https://graphql.kiwi.com', {
    'X-Client': 'relay-example',
  }),
});

const commitIntoRelay = (name, value) => {
  return commitLocalUpdate(environment, store => {
    const localForm = store.get('local:LocalForm') || store.create('local:LocalForm', 'LocalForm');
    localForm.setValue(value, name);
    const root = store.get(ROOT_ID) || store.getRoot();
    root.setLinkedRecord(localForm, 'localForm');
  });
};

const persistInStorage = (name, value) => {
  const stored = JSON.parse(window.localStorage.getItem('LocalForm')) || {};
  stored[name] = value;
  window.localStorage.setItem('LocalForm', JSON.stringify(stored));
};

const commitUpdate = (name, value) => {
  commitIntoRelay(name, value);
  persistInStorage(name, value);
};

if (typeof window !== 'undefined') {
  const stored = JSON.parse(window.localStorage.getItem('LocalForm')) || {};
  commitIntoRelay('subject', stored.subject);
  commitIntoRelay('message', stored.message);
}

function handleResponse(props: LocalFormQueryResponse) {
  return (
    <>
      <InputField
        value={props.localForm?.subject ?? ''}
        label="Subject"
        onChange={e => commitUpdate('subject', e.target.value)}
      />
      <Textarea
        value={props.localForm?.message ?? ''}
        label="Message"
        onChange={e => commitUpdate('message', e.target.value)}
      />
    </>
  );
}

export default function App() {
  return (
    <Stack>
      <Heading>Persisted form</Heading>
      <Text>
        This example shows how Relay local schema can be used with form inputs. As a bonus, values
        are persisted into the LocalStorage so anything you typed should &quot;survive&quot; page
        reload.
      </Text>

      <Separator />

      <QueryRenderer
        clientID="https://github.com/kiwicom/relay-example"
        query={graphql`
          query LocalFormQuery {
            __typename # Relay compiler still requires a server schema field :-(
            localForm {
              subject
              message
            }
          }
        `}
        onSystemError={({ error }) => {
          // eslint-disable-next-line no-console
          console.error(error);
          return <div>Error: {error.message}</div>;
        }}
        onResponse={handleResponse}
      />
    </Stack>
  );
}
