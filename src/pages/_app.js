// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RelayEnvironmentProvider } from '@adeira/relay';
import { Grommet, grommet as grommetTheme, Header, Box } from 'grommet';
import { createGlobalStyle } from 'styled-components';
import { deepMerge } from 'grommet/utils';

import createRelayEnvironment from '../createRelayEnvironment';
import Navbar from '../components/Navbar';

const GlobalStyle = createGlobalStyle`
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
            <Navbar />
          </Header>
          <Box pad="medium">
            {__DEV__ ? (
              <div className={styles('box')}>
                TIP: Open a console to see what&apos;s going on behind the scenes.
              </div>
            ) : (
              <div className={styles('box', 'boxWarning')}>
                It&apos;s better to clone this repository and try it in development mode so you can
                see what&apos;s going on behind the scenes:{' '}
                <a href="https://github.com/adeira/relay-example">
                  https://github.com/adeira/relay-example
                </a>
              </div>
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

const styles = sx.create({
  box: {
    backgroundColor: '#FFF8E1',
    maxWidth: '100%',
    padding: 12,
  },
  boxWarning: {
    backgroundColor: '#FFCA28',
  },
});
