import { getAllPosts, getAllPostsByAuthor } from "../../lib/api";
import Container from "../../components/container";
import Head from "next/head";
import MoreStories from "../../components/more-stories";
import Post from "../../interfaces/post";
import SideBar from "../../components/side-bar";

type Props = {
  allPosts: Post[];
  allPostsByAuthor: Post[];
};

export default function Lauren({ allPosts, allPostsByAuthor }: Props) {
  const titleText = `Lauren's Posts | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Posts by Lauren
          </h1>
          <MoreStories posts={allPostsByAuthor} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPostsByAuthor = getAllPostsByAuthor("lauren", [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts, allPostsByAuthor },
  };
};
