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
            <Search posts={allPosts} />
          </article>
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  search: string;
  allPosts: PostType[];
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

  return {
    props: {
      allPosts,
      search: query?.query?.toString() ?? "",
    },
  };
};
