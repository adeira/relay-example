// @flow

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { createEnvironment, createNetworkFetcher, RelayEnvironmentProvider } from '@kiwicom/relay';
import { Alert, Button, ButtonGroup, Stack } from '@kiwicom/orbit-components';
import Link from 'next/link';

const resource = 'https://graphql.kiwi.com';
const environment = createEnvironment({
  fetchFn: createNetworkFetcher(resource, {
    'X-Client': 'https://github.com/kiwicom/relay-example',
  }),
  graphiQLPrinter: (request, variables) => {
    return `${resource}/?query=${encodeURIComponent(request.text)}&variables=${encodeURIComponent(
      JSON.stringify(variables),
    )}`;
  },
});

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <RelayEnvironmentProvider environment={environment}>
        <Head>
          <title>My new cool app</title>
        </Head>
        <Stack>
          <ButtonGroup>
            <Link href="/">
              <Button size="small">Pagination examples</Button>
            </Link>
            <Link href="/polling">
              <Button size="small">Polling example</Button>
            </Link>
            <Link href="/local-form">
              <Button size="small">Local schema example</Button>
            </Link>
          </ButtonGroup>
          <Alert>TIP: Open a console to see what&apos;s going on behind the scenes.</Alert>
          <Component {...pageProps} />
        </Stack>
      </RelayEnvironmentProvider>
    );
  }
}
