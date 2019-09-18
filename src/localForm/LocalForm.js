// @flow

/* global window */

import React from 'react';
import {
  commitLocalUpdate,
  createLocalEnvironment,
  graphql,
  LocalQueryRenderer,
} from '@kiwicom/relay';
import { ROOT_ID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies
import {
  InputField,
  Textarea,
  Heading,
  Text,
  Separator,
  Stack,
  Alert,
} from '@kiwicom/orbit-components';

import type { LocalFormQueryResponse } from './__generated__/LocalFormQuery.graphql';

const environment = createLocalEnvironment();

const commitIntoRelay = (name, value) => {
  // eslint-disable-next-line no-console
  console.log(
    "Commit '%s' into relay: %c'%s'",
    name,
    'color: green; background-color: lightgreen',
    value,
  );
  return commitLocalUpdate(environment, store => {
    const localForm = store.get('local:LocalForm') ?? store.create('local:LocalForm', 'LocalForm');
    localForm.setValue(value, name);
    const root = store.get(ROOT_ID) ?? store.getRoot();
    root.setLinkedRecord(localForm, 'localForm');
  });
};

const persistInStorage = (name, value) => {
  // eslint-disable-next-line no-console
  console.log(
    "Commit '%s' into local storage: %c'%s'",
    name,
    'color: green; background-color: lightgreen',
    value,
  );
  const stored = JSON.parse(window.localStorage.getItem('LocalForm')) ?? {};
  stored[name] = value;
  window.localStorage.setItem('LocalForm', JSON.stringify(stored));
};

const commitUpdate = (name, value) => {
  commitIntoRelay(name, value);
  persistInStorage(name, value);
};

if (typeof window !== 'undefined') {
  const stored = JSON.parse(window.localStorage.getItem('LocalForm')) ?? {};
  commitIntoRelay('subject', stored.subject);
  commitIntoRelay('message', stored.message);
}

function handleResponse({ props: rendererProps }: {| +props: ?LocalFormQueryResponse |}) {
  if (!rendererProps) {
    return <div>Loading local state...</div>;
  }

  return (
    <>
      <Alert>TIP: Open a console to see what&apos;s going on behind the scenes.</Alert>
      <InputField
        value={rendererProps.localForm?.subject ?? ''}
        label="Subject"
        onChange={e => commitUpdate('subject', e.target.value)}
      />
      <Textarea
        value={rendererProps.localForm?.message ?? ''}
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

      <LocalQueryRenderer
        environment={environment}
        query={graphql`
          query LocalFormQuery {
            __typename # https://github.com/facebook/relay/issues/2471
            localForm {
              subject
              message
            }
          }
        `}
        render={handleResponse}
      />
    </Stack>
  );
}
