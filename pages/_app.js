// @flow

import { Note, SxDesignProvider } from '@adeira/sx-design';
import sx from '@adeira/sx';
import App from 'next/app';
import Head from 'next/head';
import { RelayEnvironmentProvider } from '@adeira/relay';
import type { Node } from 'react';

import '../src/styles/app.css';
import createRelayEnvironment from '../src/createRelayEnvironment';
import Navbar from '../src/components/Navbar';

export default class MyApp extends App {
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
              <Note tint="warning">
                Open a console to see what&apos;s going on behind the scenes.
              </Note>
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
              <Component {...pageProps} />
            </div>
          </div>
        </RelayEnvironmentProvider>
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
