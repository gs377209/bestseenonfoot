import { generateRssFeed, getAllPosts } from "../lib/api";
import { BASE_URL } from "../lib/constants";
import Container from "../components/container";
import Head from "next/head";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import MoreStories from "../components/more-stories";
import Post from "../interfaces/post";
import SideBar from "../components/side-bar";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const titleText = `Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={BASE_URL} key="canonical" />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
  generateRssFeed();

  return {
    props: { allPosts },
  };
};
