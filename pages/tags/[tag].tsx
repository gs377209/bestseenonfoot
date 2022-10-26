import Container from "../../components/container";
import Head from "next/head";
import Intro from "../../components/intro";
import MoreStories from "../../components/more-stories";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";

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
    fallback: false,
    paths: Array.from(uniqueTags).map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
  };
}
