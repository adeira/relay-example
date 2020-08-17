// @flow

import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RelayEnvironmentProvider } from '@adeira/relay';
import { Grommet, grommet as grommetTheme, Anchor, Header, Box, Nav } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import { deepMerge } from 'grommet/utils';

import createRelayEnvironment from '../createRelayEnvironment';

if (__DEV__) {
  import('relay-devtools').then(({ installRelayDevTools }) => {
    installRelayDevTools();
  });
}

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
}
`;

const theme = deepMerge(grommetTheme, {
  button: {
    extend: `border-radius: 3px; color: #fff`,
  },
  select: {
    options: {
      text: { color: '#444444' },
    },
    control: {
      extend: `color: #444444;`,
    },
  },
  global: {
    colors: {
      brand: '#30b8ba',
      white: '#fff',
    },
  },
});

export default class MyApp extends App {
  componentDidMount: () => void = () => {
    Router.events.on('routeChangeStart', this.handleRouteChangeStart);
    Router.events.on('routeChangeComplete', this.handleRouteChangeComplete);
    Router.events.on('routeChangeError', this.handleRouteChangeComplete);
  };

  componentWillUnmount: () => void = () => {
    Router.events.off('routeChangeStart', this.handleRouteChangeStart);
  };

  handleRouteChangeStart: (url: string) => void = (url: string) => {
    console.log(`Loading: ${url}`); // eslint-disable-line no-console
    NProgress.start();
  };

  handleRouteChangeComplete: () => void = () => {
    NProgress.done();
  };

  render(): React.Node {
    const { Component, pageProps } = this.props;
    return (
      <RelayEnvironmentProvider environment={createRelayEnvironment(undefined)}>
        <Head>
          <title>Relay Example</title>
        </Head>
        <GlobalStyle />
        <Grommet theme={theme}>
          <Header background="brand" pad="medium">
            <Link href="/">
              <Anchor color="white">Relay Example</Anchor>
            </Link>
            <Nav direction="row" gap="medium">
              <Link href="/">
                <Anchor color="white">Pagination</Anchor>
              </Link>
              <Link href="/polling">
                <Anchor color="white">Polling</Anchor>
              </Link>
              <Link href="/local-form">
                <Anchor color="white">Local schema</Anchor>
              </Link>
              <Link href="/ssr">
                <Anchor color="white">Server side rendering</Anchor>
              </Link>
              <Link href="/mutations/range-add">
                <Anchor color="white">Range add mutation</Anchor>
              </Link>
            </Nav>
          </Header>
          <Box pad="medium">
            {__DEV__ ? (
              <Box background="neutral-3" pad="small">
                TIP: Open a console to see what&apos;s going on behind the scenes.
              </Box>
            ) : (
              <Box background="status-warning" pad="small">
                It&apos;s better to clone this repository and try it in development mode.
              </Box>
            )}
            <Box margin={{ top: 'small' }}>
              <Component {...pageProps} />
            </Box>
          </Box>
        </Grommet>
      </RelayEnvironmentProvider>
    );
  }
}
