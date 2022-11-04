import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.css";
import {
  FACEBOOK_APP_ID,
  FACEBOOK_PIXEL_ID,
  GOOGLE_ANALYTICS_ID,
  GOOGLE_OPTIMIZE_ID,
  GOOGLE_TAG_MANAGER_ID,
} from "../lib/constants";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* tags/analytics */}
      {/* <!-- Google Tag Manager --> */}
      <Script id="google-tag">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
          `}
      </Script>
      {/* <!-- End Google Tag Manager --> */}

      {/* <!-- Google tag (gtag.js) - analytics --> */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      ></Script>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
      </Script>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=${GOOGLE_OPTIMIZE_ID}`}
      ></Script>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${FACEBOOK_PIXEL_ID});
          `}
      </Script>

      {/* social */}
      <div id="fb-root"></div>
      <Script
        async
        defer
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=${FACEBOOK_APP_ID}&autoLogAppEvents=1`}
        nonce="1RU6xNzb"
      />
      <Script
        async
        strategy="lazyOnload"
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
