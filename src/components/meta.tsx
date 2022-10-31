import { HOME_OG_IMAGE_URL } from "../lib/constants";
import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="robots" content="all" />
      <meta name="googlebot" content="all" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`A travel blog`} key="desc" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="og:image" />

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="application-name" content="Best Seen On Foot" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Best Seen On Foot" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="twitter:card" content="summary" key="twitter:card" />
      <meta
        name="twitter:url"
        content="https://bestseenonfoot.com"
        key="twitter:url"
      />
      <meta
        name="twitter:title"
        content="Best Seen On Foot"
        key="twitter:title"
      />
      <meta
        name="twitter:description"
        content="A travel blog"
        key="twitter:description"
      />
      <meta
        name="twitter:image"
        content="https://bestseenonfoot.com/favicon/android-chrome-192x192.png"
        key="twitter:image"
      />
      <meta
        name="twitter:creator"
        content="@bestseenonfoot"
        key="twitter:creator"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content="Best Seen On Foot" key="og:title" />
      <meta
        property="og:description"
        content="A travel blog"
        key="og:description"
      />
      <meta
        property="og:site_name"
        content="Best Seen On Foot"
        key="og:site_name"
      />
      <meta
        property="og:url"
        content="https://bestseenonfoot.com"
        key="og:url"
      />
    </Head>
  );
};

export default Meta;
