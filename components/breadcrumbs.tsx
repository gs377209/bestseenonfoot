import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Breadcrumbs() {
  const { asPath } = useRouter();

  if (asPath === "/") {
    return null;
  }

  const crumbs = asPath.split("/");

  return (
    <div className="container mx-auto p-5">
      {crumbs.map((crumb, index) => {
        const href =
          crumb === "posts" ? "/" : crumbs.slice(0, index + 1).join("/");
        const crumbDisplay = crumb.charAt(0).toUpperCase() + crumb.slice(1);

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
