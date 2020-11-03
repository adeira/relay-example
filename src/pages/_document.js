// @flow

import * as React from 'react';
import Document, { Head, Main, NextScript, type DocumentContext } from 'next/document';
import * as sx from '@adeira/sx';

type RenderPageResult = {|
  +html: string,
  +head: $ReadOnlyArray<React.Node>,
  +styles: $ReadOnlyArray<any>,
|};

export default class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext): RenderPageResult {
    return sx.renderPageWithSX(ctx.renderPage);
  }

  render(): React.Element<'html'> {
    return (
      <html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/reset.css" />
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
