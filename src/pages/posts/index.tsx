import { BASE_URL } from "../../lib/constants";
import Container from "../../components/container";
import Head from "next/head";
import MoreStories from "../../components/more-stories";
import Post from "../../interfaces/post";
import SideBar from "../../components/side-bar";
import { getAllPosts } from "../../lib/api";

type Props = {
  allPosts: Post[];
};

export default function Posts({ allPosts }: Props) {
  const titleText = `Posts | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/posts`} key="canonical" />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Posts
          </h1>
          <MoreStories posts={allPosts} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
