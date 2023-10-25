"use client";

import * as gtag from "@/lib/gtag";
import * as gtm from "@/lib/gtm";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}${
      searchParams.toString() ? "?" + searchParams : ""
    }`;
    gtm.pageview(url);
    gtag.pageview(url);
  }, [pathname, searchParams]);

  return null;
}
