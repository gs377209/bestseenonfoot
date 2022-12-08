import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import PostType from "../interfaces/post";

interface Props {
  posts: PostType[];
}

export default function Search({ posts }: Props) {
  const router = useRouter();
  const [results, setResults] = useState<PostType[]>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target as HTMLFormElement;
    const Fuse = (await import("fuse.js")).default;
    const fuseOptions = {
      keys: [
        {
          name: "title",
          weight: 1,
        },
        {
          name: "tags",
          weight: 0.75,
        },
        {
          name: "author.name",
          weight: 0.5,
        },
        {
          name: "location.name",
          weight: 0.5,
        },
        {
          getFn: (post: PostType) => format(parseISO(post.date), "LLLL	d, yyyy"),
          name: "date",
          weight: 0.3,
        },
      ],
    };
    const fuse = new Fuse(posts, fuseOptions);
    setResults(
      fuse.search(form.search.value as string).map((result) => result.item)
    );
    router.push(`/search-results?query=${form.search.value}`);

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
      <label className="sr-only" htmlFor="search">
        Search for Posts
      </label>
      <input
        type="search"
        placeholder="Search for Posts"
        id="search"
        name="search"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <button
        type="submit"
        className={classNames(
          "inline-flex max-w-xs items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-semibold leading-6 text-white shadow transition duration-150 ease-in-out hover:bg-slate-400",
          {
            "cursor-not-allowed": isSubmitting,
          }
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
          "Submit"
        )}
      </button>
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </form>
  );
}
