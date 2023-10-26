"use client";

import useCrumbs from "@/hooks/useCrumbs";
import Link from "next/link";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const crumbs = useCrumbs();

  //  we don't know the URL yet OR we are on the home page
  if (crumbs.length <= 0 || (crumbs.length === 2 && crumbs[1] === "")) {
    return null;
  }

  return (
    <div className="container mx-auto p-5">
      {crumbs.map((crumb, index) => {
        const href = crumb === "" ? "/" : crumbs.slice(0, index + 1).join("/");
        const crumbDecoded = decodeURIComponent(crumb);
        const crumbDisplay =
          crumbDecoded === ""
            ? "Home"
            : crumbDecoded
                .split(/\s|-/)
                .reduce((pc, cc) => {
                  return `${pc} ${cc.charAt(0).toUpperCase() + cc.slice(1)}`;
                }, "")
                .trim();

        if (crumbs.length === index + 1) {
          return <span key={crumb}>{crumbDisplay}</span>;
        }
        return (
          <Fragment key={crumb}>
            <Link href={href} className="font-medium text-gray-900 underline">
              {crumbDisplay}
            </Link>
            <span className="mx-1">/</span>
          </Fragment>
        );
      })}
    </div>
  );
}
