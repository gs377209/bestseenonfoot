import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Layout from "../components/layout";
import {
  BASE_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_PIXEL_ID,
  GOOGLE_ADS_ID,
  GOOGLE_ANALYTICS_ID,
  GOOGLE_OPTIMIZE_ID,
  GOOGLE_TAG_MANAGER_ID,
  HOME_OG_IMAGE_URL,
} from "../lib/constants";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  authors: [
    {
      name: "Lauren Schirtzinger",
      url: `${BASE_URL}/authors/lauren`,
    },
    {
      name: "Gerrod Schirtzinger",
      url: `${BASE_URL}/authors/gerrod`,
    },
  ],
  description: "Welcome to our travels!",
  openGraph: {
    description: "A travel blog",
    images: [
      {
        alt: "Best Seen on Foot Logo",
        height: 512,
        url: HOME_OG_IMAGE_URL,
        width: 512,
      },
    ],
    locale: "en_US",
    siteName: "Best Seen On Foot",
    title: "Best Seen On Foot",
    type: "website",
    url: BASE_URL,
  },
  other: {
    ["fb:app_id"]: FACEBOOK_APP_ID,
    publish_date: "2018-10-01T17:00:00.000Z",
  },
  title: "Best Seen on Foot",
  twitter: {
    card: "summary_large_image",
    creator: "@bestseenonfoot",
    description: "A travel blog",
    images: [
      {
        alt: "Best Seen on Foot Logo",
        height: 512,
        url: HOME_OG_IMAGE_URL,
        width: 512,
      },
    ],
    site: "@bestseenonfoot",
    title: "Best Seen On Foot",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <noscript>
          <Image
            alt="facebook pixel"
            height="1"
            width="1"
            className="hidden"
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        {/* ads/consent */}
        <Script
          async
          strategy="beforeInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
          crossOrigin="anonymous"
        ></Script>

        {/* tags/analytics */}
        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google tag (gtag.js) - analytics --> */}
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        ></Script>
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GOOGLE_ANALYTICS_ID}');`}
        </Script>
        <Script
          strategy="afterInteractive"
          src={`https://www.googleoptimize.com/optimize.js?id=${GOOGLE_OPTIMIZE_ID}`}
        ></Script>
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', ${FACEBOOK_PIXEL_ID});`}
        </Script>

        {/* social */}
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
        />
      </head>
      <body>
        <Layout>{children}</Layout>
        <Analytics />
        {/* social */}
        <div id="fb-root"></div>
      </body>
    </html>
  );
}
