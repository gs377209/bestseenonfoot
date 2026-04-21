"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Nav from "./nav";

export default function NavWrapper() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return <Nav key={`${pathname}-${searchParams.toString()}`} />;
}
