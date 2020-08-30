// @flow

import * as React from 'react';
import * as sx from '@adeira/sx';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RelayEnvironmentProvider } from '@adeira/relay';

import createRelayEnvironment from '../createRelayEnvironment';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import '../styles/app.css';
import { tablet } from '../components/breakpoints';

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
        <Header>
          <Navbar />
        </Header>
        <div className={styles('padMedium')}>
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
          <div className={styles('marginTopSmall')}>
            <Component {...pageProps} />
          </div>
        </div>
      </RelayEnvironmentProvider>
    );
  }
}

const styles = sx.create({
  box: {
    backgroundColor: '#FFF8E1',
    maxWidth: '100%',
    padding: 'var(--space-small)',
  },
  boxWarning: {
    backgroundColor: '#FFCA28',
  },
  padMedium: {
    padding: 'var(--space-small)',
    [tablet]: {
      padding: 'var(--space-x-large)',
    },
  },
  marginTopSmall: {
    marginTop: 'var(--space-x-small)',
    [tablet]: {
      marginTop: 'var(--space-small)',
    },
  },
});
