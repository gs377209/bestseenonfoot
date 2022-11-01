import {
  FACEBOOK_PIXEL_ID,
  GOOGLE_ADS_ID,
  GOOGLE_TAG_MANAGER_ID,
} from "../lib/constants";
import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <noscript>
          <Image
            alt="facebook pixel"
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Main />
        <NextScript />
        {/* ads/consent */}
        <Script
          async
          strategy="beforeInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
          crossOrigin="anonymous"
        ></Script>
      </body>
    </Html>
  );
}
