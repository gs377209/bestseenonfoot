import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts, getAllPostsByDate } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import { parseISO } from "date-fns";

type Props = {
  allPosts: Post[];
};

export default function YearArchives({ allPosts }: Props) {
  const titleText = `Best Seen on Foot | Archives`;

  return (
    <>
      <Layout>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Container>
          <Intro />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    tag: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
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

export async function getStaticPaths() {
  const posts = getAllPosts(["tags"]);
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag: string) => {
      uniqueTags.add(tag);
    });
  });

  return {
    paths: Array.from(uniqueTags).map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
}
