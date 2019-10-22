// @flow

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RelayEnvironmentProvider } from '@kiwicom/relay';
import { Alert, Button, ButtonGroup, Stack } from '@kiwicom/orbit-components';

import createRelayEnvironment from '../createRelayEnvironment';

export default class MyApp extends App {
  componentDidMount = () => {
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    Router.events.on('routeChangeError', this.handleRouteChangeComplete);
  };

  componentWillUnmount = () => {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
  };

  handleRouteChangeStart = (url: string) => {
    console.log(`Loading: ${url}`); // eslint-disable-line no-console
    NProgress.start();
  };

  handleRouteChangeComplete = () => {
    NProgress.done();
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <RelayEnvironmentProvider environment={createRelayEnvironment(undefined)}>
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
            <Link href="/ssr">
              <Button size="small">Server side rendering example</Button>
            </Link>
          </ButtonGroup>
          <Alert>TIP: Open a console to see what&apos;s going on behind the scenes.</Alert>
          <Component {...pageProps} />
        </Stack>
      </RelayEnvironmentProvider>
    );
  }
}
