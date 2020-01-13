// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { type Context } from 'next';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: Context) {
    const sheet = new ServerStyleSheet();
    /* $FlowExpectedError: This comment suppresses an error as we use incomplete flow declarations for next.
     * Document context has additional property, see https://github.com/flow-typed/flow-typed/pull/3699
     * To see the error delete this comment and run Flow. */
    const originalRenderPage = ctx.renderPage;

    try {
      /* $FlowExpectedError: This comment suppresses an error as we use incomplete flow declarations for next.
       * Document context has additional property, see https://github.com/flow-typed/flow-typed/pull/3699
       * To see the error delete this comment and run Flow. */
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
