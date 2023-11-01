"use client";

import * as gtag from "@/lib/gtag";
// import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? "?" + searchParams : ""
    }`;
    // sendGTMEvent({
    //   event: "Pageview",
    //   page: url,
    //   pagePath: url,
    //   pageTitle: url,
    //   visitorType: "visitor",
    // });
    // @ts-expect-error - replace with above code when ready
    window?.dataLayer?.push({
      event: "Pageview",
      page: url,
      pagePath: url,
      pageTitle: url,
      visitorType: "visitor",
    });
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}
