import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const initialProps = await Document.getInitialProps(ctx)
    const styleTags = sheet.getStyleElement();

    return { ...page, ...initialProps, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
        <link
            rel="preload"
            href="/fonts/AvenirNextGeorgian-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
        <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Regular.otf");
                font-weight:400;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Black.otf");
                font-weight:900;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Light.otf");
                font-weight:300;
                font-style:normal;
                font-display: fallback;
              }
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>)
  }
}