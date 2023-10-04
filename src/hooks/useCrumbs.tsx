"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCrumbs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [crumbs, setCrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (pathname) {
      setCrumbs(pathname.split("/"));
    }
  }, [pathname, searchParams]);

  return crumbs;
}
