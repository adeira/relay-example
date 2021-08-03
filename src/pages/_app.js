// @flow

import { Note, SxDesignProvider } from '@adeira/sx-design';
import sx from '@adeira/sx';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { RelayEnvironmentProvider } from '@adeira/relay';
import type { Node } from 'react';

import '../styles/app.css';
import createRelayEnvironment from '../createRelayEnvironment';
import Navbar from '../components/Navbar';
import { tablet } from '../components/breakpoints';
import { MediaContextProvider } from '../components/Media';

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

  render(): Node {
    const { Component, pageProps } = this.props;
    return (
      <SxDesignProvider>
        <RelayEnvironmentProvider environment={createRelayEnvironment(undefined)}>
          <Head>
            <title>Relay Example</title>
          </Head>

          <header>
            <Navbar />
          </header>

          <div className={styles('padMedium')}>
            {__DEV__ ? (
              <Note>Open a console to see what&apos;s going on behind the scenes.</Note>
            ) : (
              <Note tint="warning">
                It&apos;s better to clone this repository and try it in development mode so you can
                see what&apos;s going on behind the scenes:{' '}
                <a href="https://github.com/adeira/relay-example">
                  https://github.com/adeira/relay-example
                </a>
              </Note>
            )}

            <div className={styles('marginTopSmall')}>
              <MediaContextProvider>
                <Component {...pageProps} />
              </MediaContextProvider>
            </div>
          </div>
        </RelayEnvironmentProvider>
      </SxDesignProvider>
    );
  }
}

const styles = sx.create({
  padMedium: {
    padding: 'var(--space-small)',
    [tablet]: {
      padding: 'var(--space-x-large)',
    },
  },
  marginTopSmall: {
    marginBlockStart: 'var(--space-x-small)',
    [tablet]: {
      marginBlockStart: 'var(--space-small)',
    },
  },
});
