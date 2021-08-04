// @flow

import { ErrorBoundary, Note, SxDesignProvider } from '@adeira/sx-design';
import sx from '@adeira/sx';
import App from 'next/app';
import Head from 'next/head';
import { RelayEnvironmentProvider } from '@adeira/relay';
import type { Node } from 'react';

import '../styles/app.css';
import createRelayEnvironment from '../createRelayEnvironment';
import Navbar from '../components/Navbar';
import { MediaContextProvider } from '../components/Media';

export default class MyApp extends App {
  render(): Node {
    const { Component, pageProps } = this.props;
    return (
      <SxDesignProvider>
        <ErrorBoundary>
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
                  It&apos;s better to clone this repository and try it in development mode so you
                  can see what&apos;s going on behind the scenes:{' '}
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
        </ErrorBoundary>
      </SxDesignProvider>
    );
  }
}

const styles = sx.create({
  padMedium: {
    padding: 'var(--sx-spacing-medium)',
  },
  marginTopSmall: {
    marginBlockStart: 'var(--sx-spacing-large)',
  },
});
