"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Props {
  consentGranted: boolean;
}

export function NavigationEvents({ consentGranted }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (consentGranted) {
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
    }
  }, [consentGranted, pathname, searchParams]);

  return null;
}
