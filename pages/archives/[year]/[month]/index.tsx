import Container from "../../../../components/container";
import MoreStories from "../../../../components/more-stories";
import HeroPost from "../../../../components/hero-post";
import Intro from "../../../../components/intro";
import Layout from "../../../../components/layout";
import { getAllPosts, getAllPostsByDate } from "../../../../lib/api";
import Head from "next/head";
import Post from "../../../../interfaces/post";
import { parseISO } from "date-fns";

type Props = {
  allPosts: Post[];
};

export default function MonthArchives({ allPosts }: Props) {
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
    year: string;
    month: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const allPosts = getAllPostsByDate(params, [
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
  const posts = getAllPosts(["date"]);

  return {
    paths: posts.map((post) => {
      const date = parseISO(post.date);
      return {
        params: {
          year: date.getFullYear().toString(),
          month: (date.getMonth() + 1).toString(),
        },
      };
    }),
    fallback: false,
  };
}
