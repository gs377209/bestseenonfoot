import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useCrumbs() {
  const { asPath, isReady } = useRouter();
  const [crumbs, setCrumbs] = useState<string[]>([]);

  useEffect(() => {
    if (isReady) {
      setCrumbs(asPath.split("?")[0].split("/"));
    }
  }, [isReady, asPath]);

  return crumbs;
}
