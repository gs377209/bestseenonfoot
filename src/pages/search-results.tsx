import { format, parseISO } from "date-fns";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Search from "../components/search";
import SideBar from "../components/side-bar";
import { Post } from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { BASE_URL } from "../lib/constants";

export default function SearchResults({
  allPosts,
  filteredPosts,
  search,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const titleText = `Search Results | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link
          rel="canonical"
          href={`${BASE_URL}/search-results?query=${search}`}
          key="canonical"
        />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Search Results For &quot;{search}&quot;
          </h1>
          <div className="mb-10">
            <Search />
          </div>
          <MoreStories posts={filteredPosts} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  allPosts: Post[];
  filteredPosts: Post[];
  search: string;
}> = async ({ query }) => {
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
    .search(query?.query?.toString() ?? "")
    .map((result) => result.item);

  return {
    props: {
      allPosts,
      filteredPosts,
      search: query?.query?.toString() ?? "",
    },
  };
};
