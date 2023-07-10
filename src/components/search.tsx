import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function Search() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target as HTMLFormElement;

    router.push(`/search-results?query=${form.search.value}`);

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3">
      <label className="sr-only" htmlFor="search">
        Search for Posts
      </label>
      <input
        type="search"
        placeholder="Search for Posts"
        id="search"
        name="search"
        className="col-span-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <button
        type="submit"
        className={classNames(
          "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
          {
            "cursor-not-allowed": isSubmitting,
          },
        )}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
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
    </form>
  );
}
