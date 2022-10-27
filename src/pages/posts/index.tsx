import Container from "../../components/container";
import Head from "next/head";
import Intro from "../../components/intro";
import MoreStories from "../../components/more-stories";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";

type Props = {
  allPosts: Post[];
};

export default function Posts({ allPosts }: Props) {
  const titleText = `Best Seen on Foot | Posts`;

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
