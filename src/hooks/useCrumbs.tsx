import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function useCrumbs() {
  const { asPath, isReady } = useRouter();
  const [crumbs, setCrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (isReady) {
      setCrumbs(asPath.split("/"));
    }
  }, [isReady, asPath]);

  return crumbs;
}
