import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import React from "react";
import Layout from "src/components/layout";
import {
  FACEBOOK_APP_ID,
  FACEBOOK_PIXEL_ID,
  GOOGLE_ADS_ID,
  GOOGLE_ANALYTICS_ID,
  GOOGLE_OPTIMIZE_ID,
  GOOGLE_TAG_MANAGER_ID,
} from "src/lib/constants";

export const metadata: Metadata = {
  description: "Welcome to our travels!",
  title: "Best Seen on Foot",
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
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
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
        {/* ads/consent */}
        <Script
          async
          strategy="beforeInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
          crossOrigin="anonymous"
        ></Script>
        {/* tags/analytics */}
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag"
          strategy="afterInteractive"
          onReady={() => {
            (function (w, d, s, l, i) {
              // @ts-expect-error
              w[l] = w[l] || [];
              // @ts-expect-error
              // eslint-disable-next-line sort-keys
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                // eslint-disable-next-line sort-vars
                dl = l != "dataLayer" ? "&l=" + l : "";
              // @ts-expect-error
              j.async = true;
              // @ts-expect-error
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              // @ts-expect-error
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", GOOGLE_TAG_MANAGER_ID);
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google tag (gtag.js) - analytics --> */}
        <Script
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          onReady={() => {
            // @ts-expect-error
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              // @ts-expect-error
              // eslint-disable-next-line no-undef
              dataLayer.push(arguments);
            }
            // @ts-expect-error
            gtag("js", new Date());

            // @ts-expect-error
            gtag("config", GOOGLE_ANALYTICS_ID);
          }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googleoptimize.com/optimize.js?id=${GOOGLE_OPTIMIZE_ID}`}
        ></Script>
        {/* Global Site Code Pixel - Facebook Pixel */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          onReady={() => {
            // @ts-expect-error
            // eslint-disable-next-line no-unused-expressions
            !(function (f, b, e, v, n, t, s) {
              // @ts-expect-error
              if (f.fbq) return;
              // @ts-expect-error
              n = f.fbq = function () {
                // @ts-expect-error
                // eslint-disable-next-line no-unused-expressions
                n.callMethod
                  ? // @ts-expect-error
                    n.callMethod.apply(n, arguments)
                  : // @ts-expect-error
                    n.queue.push(arguments);
              };
              // @ts-expect-error
              if (!f._fbq) f._fbq = n;
              // @ts-expect-error
              n.push = n;
              // @ts-expect-error
              n.loaded = !0;
              // @ts-expect-error
              n.version = "2.0";
              // @ts-expect-error
              n.queue = [];
              // @ts-expect-error
              t = b.createElement(e);
              // @ts-expect-error
              t.async = !0;
              // @ts-expect-error
              t.src = v;
              // @ts-expect-error
              s = b.getElementsByTagName(e)[0];
              // @ts-expect-error
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js",
            );
            // @ts-expect-error
            // eslint-disable-next-line no-undef
            fbq("init", FACEBOOK_PIXEL_ID);
          }}
        />

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
        />

        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
