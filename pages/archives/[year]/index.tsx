import { getAllPosts, getAllPostsByDate } from "../../../lib/api";
import Container from "../../../components/container";
import Head from "next/head";
import Intro from "../../../components/intro";
import MoreStories from "../../../components/more-stories";
import Post from "../../../interfaces/post";
import { parseISO } from "date-fns";

type Props = {
  allPosts: Post[];
};

export default function YearArchives({ allPosts }: Props) {
  const titleText = `Best Seen on Foot | Archives`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <Intro />
        <MoreStories posts={allPosts} />
      </Container>
    </>
  );
}

type Params = {
  params: {
    year: string;
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
    fallback: false,
    paths: posts.map((post) => {
      const date = parseISO(post.date);
      return {
        params: {
          year: date.getFullYear().toString(),
        },
      };
    }),
  };
}
