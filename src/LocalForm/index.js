// @flow

import { LayoutBlock, Text } from '@adeira/sx-design';
import { useEffect, type Node } from 'react';
import {
  commitLocalUpdate,
  createLocalEnvironment,
  graphql,
  LocalQueryRenderer,
} from '@adeira/relay';
// FIXME:
import { generateClientID } from 'relay-runtime'; // eslint-disable-line import/no-extraneous-dependencies
import sx from '@adeira/sx';

import type { LocalFormQueryResponse } from './__generated__/LocalFormQuery.graphql';
import TextInput from '../components/TextInput';
// We are overwriting here the application env context and replacing it with our custom local env.
const environment = createLocalEnvironment();
const consoleStyle = 'color: green; background-color: lightgreen;';

type LocalData = {
  +subject?: string,
  +message?: string,
};

function getLocalStorageData(): LocalData {
  return JSON.parse(window.localStorage.getItem('LocalForm')) ?? {};
}

function persist(data: LocalData) {
  return commitLocalUpdate(environment, (store) => {
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
    <div className={styles('formContainer')}>
      <TextInput
        value={rendererProps.localForm?.subject ?? ''}
        onChange={(subject) => persist({ subject })}
        placeholder="Subject"
        label="Subject"
      />
      <TextInput
        value={rendererProps.localForm?.message ?? ''}
        placeholder="Message"
        label="Message"
        onChange={(message) => persist({ message })}
      />
    </div>
  );
}

export default function LocalForm(): Node {
  useEffect(() => {
    persist(getLocalStorageData());
  });

  return (
    <LayoutBlock spacing="large">
      <Text as="h1">Persisted form</Text>
      <Text>
        This example shows how Relay local schema can be used with form inputs. As a bonus, values
        are persisted into the LocalStorage so anything you typed should &quot;survive&quot; page
        reload.
      </Text>

      <LocalQueryRenderer
        environment={environment}
        query={graphql`
          query LocalFormQuery {
            # https://github.com/facebook/relay/issues/2471
            ... on RootQuery {
              __typename
            }
            localForm {
              subject
              message
            }
          }
        `}
        onResponse={handleResponse}
      />
    </LayoutBlock>
  );
}

const styles = sx.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-small)',
  },
});
