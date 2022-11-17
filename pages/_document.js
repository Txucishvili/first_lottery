import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { isServer } from '../src/utils';

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
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/AvenirNextGeorgian-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `history.scrollRestoration = "manual"`,
            }}
          />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `

              
                  html {
                    min-height: 100%;
                    height: 100%;
                    overflow-x: hidden;
                  }
                  
                  body {
                    overflow-x: hidden;
                    padding-bottom: 80px;
                    max-width: 100%;
                  }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-UltLt.otf");
                font-weight:100;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Thin.otf");
                font-weight:200;
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

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Light.otf");
                font-weight:400;
                font-style:normal;
                font-display: fallback;
              }

              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Regular.otf");
                font-weight:500;
                font-style:normal;
                font-display: fallback;
              }
                  
              @font-face{
                font-family:'Avenir Next Georgian';
                src:url("/fonts/AvenirNextGeorgian-Medium.otf");
                font-weight:600;
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
                font-family:'LBet STD MT';
                src:url("/fonts/lbet-mt-regular.woff2");
                font-style:normal;
                font-display: fallback;
              }
              @font-face{
                font-family:'LBet STD NUS';
                src:url("/fonts/lbet-nus-regular.woff2");
                font-style:normal;
                font-display: fallback;
              }
            `,
            }}
          />
          {/* {this.props.sheet} */}
        </Head>
        <body>
          <Main />
          <div id="modals"></div>
          <div id="portals"></div>
          <NextScript />
        </body>
      </Html>)
  }
}