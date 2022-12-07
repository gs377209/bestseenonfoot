import { FormEvent, useState } from "react";
import { format, parseISO } from "date-fns";
import PostType from "../interfaces/post";

interface Props {
  posts: PostType[];
}

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

export default function Search({ posts }: Props) {
  const [results, setResults] = useState<PostType[]>();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
      <input
        type="search"
        placeholder="Search for Posts"
        onChange={async (e) => {
          const { value } = e.currentTarget;

          const Fuse = (await import("fuse.js")).default;
          const fuse = new Fuse(posts, fuseOptions);

          setResults(fuse.search(value).map((result) => result.item));
        }}
        id="search"
        name="search"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <pre>Results: {JSON.stringify(results, null, 2)}</pre>
    </form>
  );
}
