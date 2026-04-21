"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useCrumbs() {
  const pathname = usePathname();

  const crumbs = useMemo(
    () => (pathname ? pathname.split("/") : []),
    [pathname],
  );

  return crumbs;
}
