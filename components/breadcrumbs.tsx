import Link from "next/link";
import { Fragment } from "react";
import useCrumbs from "../hooks/useCrumbs";

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
        const crumbDisplay =
          crumb === ""
            ? "Home"
            : crumb.charAt(0).toUpperCase() + crumb.slice(1);

        if (crumbs.length === index + 1) {
          return <span key={crumb}>{crumbDisplay}</span>;
        }
        return (
          <Fragment key={crumb}>
            <Link href={href}>
              <a className="text-blue-500 underline">{crumbDisplay}</a>
            </Link>
            <span className="mx-1">/</span>
          </Fragment>
        );
      })}
    </div>
  );
}
