import ConsentBar from "@/components/ConsentBar";
import FacebookPixel from "@/components/FacebookPixel";
import { NavigationEvents } from "@/components/NavigationEvents";
import Layout from "@/components/layout";
import { getConsentCookie } from "@/lib/actions";
import {
  BASE_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_PIXEL_ID,
  GOOGLE_ADS_ID,
  GOOGLE_OPTIMIZE_ID,
  HOME_OG_IMAGE_URL,
} from "@/lib/constants";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import Image from "next/image";
import Script from "next/script";
import React, { Suspense } from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";

import "@/styles/globals.css";

config.autoAddCss = false;

export const viewport: Viewport = {
  colorScheme: "normal",
  themeColor: "#34D399",
};

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
  metadataBase: new URL(BASE_URL),
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
  title: {
    default: "Best Seen on Foot",
    template: "%s | Best Seen on Foot",
  },
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const consentGranted = await getConsentCookie();

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

        {/* consent/bots - beforeInteractive - server side */}

        {/* tags/analytics/other - afterInteractive - client side */}
        {/* <!-- Google TM - analytics/consent --> */}
        <Script strategy="afterInteractive" id="default-consent">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('consent', 'default', {
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500,
            });
            dataLayer.push({'gtm.start': new Date().getTime(), 'event': 'gtm.js'});
            `}
        </Script>
        {/* <!-- Google ads - ads --> */}
        <Script
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
          crossOrigin="anonymous"
        ></Script>
        {/* <!-- Google optimize - other --> */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googleoptimize.com/optimize.js?id=${GOOGLE_OPTIMIZE_ID}`}
        ></Script>
      </head>
      <body>
        <Layout>{children}</Layout>
        <Analytics />
        <SpeedInsights />

        {/* chat/social - lazyOnload - client side */}
        {/* FB - social */}
        <div id="fb-root"></div>
        {/* FB - social */}
        <Script
          async
          defer
          strategy="lazyOnload"
          crossOrigin="anonymous"
          src={`https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=${FACEBOOK_APP_ID}&autoLogAppEvents=1`}
          nonce="bt5hNPrJ"
        />
        {/* Twitter - social */}
        <Script
          async
          strategy="lazyOnload"
          src="https://platform.twitter.com/widgets.js"
        />
        {/* FB - social */}
        <FacebookPixel />
        <Suspense fallback={null}>
          <ConsentBar consentGranted={consentGranted} />
          <NavigationEvents consentGranted={consentGranted} />
        </Suspense>
      </body>
    </html>
  );
}
