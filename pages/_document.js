import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { isServer } from '../src/utils';


export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet();

  //   const page = ctx.renderPage((App) => (props) =>
  //     sheet.collectStyles(<App {...props} />)
  //   );
  //   const initialProps = await Document.getInitialProps(ctx)
  //   const styleTags = sheet.getStyleElement();

  //   return { ...page, ...initialProps, styleTags };
  // }
  // static async getInitialProps (ctx) {
  //   const styledComponentsSheet = new ServerStyleSheet()
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //       ctx.renderPage = () => originalRenderPage({
  //           enhanceApp: App => props => styledComponentsSheet.collectStyles(<App {...props} />)
  //         })
  //       const initialProps = await Document.getInitialProps(ctx)
  //       return {
  //         ...initialProps,
  //         styles: (
  //           <React.Fragment>
  //             {initialProps.styles}
  //             {styledComponentsSheet.getStyleElement()}
  //           </React.Fragment>
  //         )
  //       }
  //     } finally {
  //       styledComponentsSheet.seal()
  //     }
  // }


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

          {process.env.NODE_ENV == 'production' ? <script dangerouslySetInnerHTML={{
            __html: `
              (function (d, w, s) {
                var widgetHash = 'fj6TEFjrUxFcny2mRDGd', bch = d.createElement(s); bch.type = 'text/javascript'; bch.async = true;
                bch.src = '//widgets.binotel.com/chat/widgets/' + widgetHash + '.js';
                var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(bch, sn);
              })(document, window, 'script');
              `
          }} type='text/javascript'>
          </script> : null}



          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (window.localStorage.getItem('scrollOptions')) {
                const opt = JSON.parse(window.localStorage.getItem('scrollOptions'));
                if (opt && opt.reload) {
                  window.document.scrollingElement.scrollTop = Math.abs(opt.scroll) - 50;
                }
              }
              window.addEventListener('onload', function() {
                console.log('-load')
                
              })
              `,
            }}
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
          {this.props.sheet}
        </Head>
        <body>
          <script>0</script>
          <Main />
          <div id="modals"></div>
          <div id="portals"></div>
          <NextScript />
        </body>
      </Html>)
  }
}
