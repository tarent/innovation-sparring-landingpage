import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GOOGLE_TAG_MANAGER_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="//privacy-proxy.usercentrics.eu" />
          <link rel="preload" href="//privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js" as="script"/>
          <script id="usercentrics-cmp" data-settings-id="yQ9OHJrhP" src="https://app.usercentrics.eu/browser-ui/latest/bundle_legacy.js" async=""></script>
          {/* Google Tag Manager - IMPORTANT! I've changed the index of getElementsByTagName to 1 in order to load the gtm after usercentrics-cmp!!!! */}
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[1],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
            `
          }}/>
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}"
          height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
