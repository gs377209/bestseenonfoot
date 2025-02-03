"use client";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Form from "next/form";
import { useFormStatus } from "react-dom";

function SearchButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className={classNames(
        "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
        {
          "cursor-not-allowed": status.pending,
        },
      )}
      disabled={status.pending}
    >
      {status.pending ? (
        <>
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          />{" "}
          Processing...
        </>
      ) : (
        "Search"
      )}
    </button>
  );
}

export default function Search() {
  return (
    <Form action="/search-results" className="flex gap-4">
      <label className="sr-only" htmlFor="search">
        Search for Posts
      </label>
      <input
        type="search"
        placeholder="Search for Posts"
        id="query"
        name="query"
        className="col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <SearchButton />
    </Form>
  );
}
