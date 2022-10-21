import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/index.css";
import Script from "next/script";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
