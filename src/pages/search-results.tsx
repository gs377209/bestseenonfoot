import { format, parseISO } from "date-fns";
import Fuse from "fuse.js";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Container from "../components/container";
import Search from "../components/search";
import SideBar from "../components/side-bar";
import PostType from "../interfaces/post";
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
          href={`${BASE_URL}/search-results`}
          key="canonical"
        />
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:col-span-2 lg:prose-xl">
          <h1>Search Results For &quot;{search}&quot;</h1>
          <article>
            <h2>Welcome to Best Seen On Foot!</h2>
            <pre>Results: {JSON.stringify(filteredPosts, null, 2)}</pre>
            <Search posts={allPosts} />
          </article>
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  allPosts: PostType[];
  filteredPosts: PostType[];
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
  ]) as PostType[];

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
