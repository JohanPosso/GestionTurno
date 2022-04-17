import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
// works with @material-ui/core/styles, if you prefer to use it.
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles)],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src='https://kit.fontawesome.com/433667d0d8.js' crossOrigin='anonymous' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100;900&display=swap'
            rel='stylesheet'
          ></link>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        </Head>
        <body style={{ background: '#ffff' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
