// @flow

import React, { useEffect } from 'react';
import {
  commitLocalUpdate,
  createLocalEnvironment,
  graphql,
  LocalQueryRenderer,
} from '@adeira/relay';
// FIXME:
import { generateClientID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies
import { TextInput, TextArea, Box, Heading, Text } from 'grommet';
import styled from 'styled-components';

import type { LocalFormQueryResponse } from './__generated__/LocalFormQuery.graphql';

// We are overwriting here the application env context and replacing it with our custom local env.
const environment = createLocalEnvironment();
const consoleStyle = 'color: green; background-color: lightgreen;';

const Separator = styled.hr`
  border-width: 0.5px;
  margin: 16px 0;
`;

type LocalData = {|
  +subject?: string,
  +message?: string,
|};

function getLocalStorageData(): LocalData {
  return JSON.parse(window.localStorage.getItem('LocalForm')) ?? {};
}

function persist(data: LocalData) {
  return commitLocalUpdate(environment, store => {
    const dataID = generateClientID('local', 'form');
    const record = store.get(dataID) ?? store.create(dataID, 'LocalForm');
    for (const [key, value] of Object.entries(data)) {
      // eslint-disable-next-line no-console
      console.log("Persisting '%s': %c'%s'", key, consoleStyle, value);
      record.setValue(value, key);
    }
    store.getRoot().setLinkedRecord(record, 'localForm');

    // Also persist to the local store.
    // TODO: should we observe Relay store and save it into local state instead?
    window.localStorage.setItem(
      'LocalForm',
      JSON.stringify({
        ...getLocalStorageData(),
        ...data,
      }),
    );
  });
}

function handleResponse(rendererProps: LocalFormQueryResponse) {
  return (
    <Box gap="small">
      <TextInput
        value={rendererProps.localForm?.subject ?? ''}
        onChange={e => persist({ subject: e.target.value })}
        placeholder="Subject"
      />
      <TextArea
        value={rendererProps.localForm?.message ?? ''}
        placeholder="Message"
        onChange={e => persist({ message: e.target.value })}
      />
    </Box>
  );
}

export default function LocalForm() {
  useEffect(() => {
    persist(getLocalStorageData());
  });

  return (
    <Box>
      <Heading level={1} size="small">
        Persisted form
      </Heading>
      <Text size="small">
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
        onResponse={handleResponse}
      />
    </Box>
  );
}
