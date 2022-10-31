import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head></Head>
      <body>
        {/* ads/consent */}
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1408526493984577"
          crossOrigin="anonymous"
        ></Script>

        {/* tags/analytics */}
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TP2W6D7');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TP2W6D7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-127112725-1"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-127112725-1');
          `}
        </Script>
        <Script src="https://www.googleoptimize.com/optimize.js?id=OPT-T5VZP2R"></Script>

        {/* social */}
        <div id="fb-root"></div>
        <Script
          async
          defer
          strategy="lazyOnload"
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=867560113588361&autoLogAppEvents=1"
          nonce="1RU6xNzb"
        />
        <Script
          async
          strategy="lazyOnload"
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
