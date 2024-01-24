"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? "?" + searchParams : ""
    }`;
    sendGTMEvent({
      event: "Pageview",
      page: url,
      pagePath: url,
      pageTitle: url,
      visitorType: "visitor",
    });
  }, [pathname, searchParams]);

  return null;
}
