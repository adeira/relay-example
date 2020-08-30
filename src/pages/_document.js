// @flow

import React, { type Element } from 'react';
import Document, { Head, Main, NextScript, type DocumentContext } from 'next/document';
import * as sx from '@adeira/sx';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const originalRenderPage = ctx.renderPage;
    const { html, css } = sx.renderStatic(originalRenderPage);

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...html, // @adeira/sx
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style>{css}</style> {/* @adeira/sx */}
        </>
      ),
    };
  }

  render(): Element<'html'> {
    return (
      <html lang="en-US">
        <Head>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
            rel="stylesheet"
          />
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
