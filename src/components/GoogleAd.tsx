"use client";

import { GOOGLE_ADS_ID } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

interface Props {
  adSpot: string;
  slot: string;
}

const GoogleAd = ({ adSpot, slot }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${pathname}${searchParams.toString() ? "?" + searchParams : ""}`);
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
        key={`${adSpot}-g-script-${url}`}
        onReady={() => {
          // @ts-expect-error
          // eslint-disable-next-line no-undef
          (adsbygoogle = window.adsbygoogle || []).push({});
        }}
      ></Script>
      <ins
        key={`${adSpot}-ins-${url}`}
        className="adsbygoogle block"
        data-ad-client={`${GOOGLE_ADS_ID}`}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
};

export default GoogleAd;
