import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import SearchResults from "./search-results";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${BASE_URL}/search-results?query=${searchParams?.query}`,
    },
    title: "Search Results | Best Seen on Foot",
  };
}

const getFilteredPosts = async (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "location",
    "tags",
  ]) as Post[];

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
        getFn: (post: Post) => format(parseISO(post.date), "LLLL	d, yyyy"),
        name: "date",
        weight: 0.3,
      },
    ],
    threshold: 0.4,
  };
  const fuse = new Fuse(allPosts, fuseOptions);
  const filteredPosts = fuse
    .search(searchParams?.query?.toString() ?? "")
    .map((result) => result.item);

  return {
    allPosts,
    filteredPosts,
    search: searchParams?.query?.toString() ?? "",
  };
};

export default async function Page({ searchParams }: Props) {
  const { allPosts, filteredPosts, search } =
    await getFilteredPosts(searchParams);

  return (
    <SearchResults
      allPosts={allPosts}
      filteredPosts={filteredPosts}
      search={search}
    />
  );
}
