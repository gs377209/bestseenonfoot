import Head from "next/head";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import SideBar from "../../components/side-bar";
import { Post } from "../../interfaces/post";
import { getAllPosts, getAllPostsByTag } from "../../lib/api";
import { BASE_URL } from "../../lib/constants";

type Props = {
  allPosts: Post[];
  allPostsByTag: Post[];
  tag: string;
};

export default function Tag({ allPosts, allPostsByTag, tag }: Props) {
  const titleText = `${tag} Posts | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link
          rel="canonical"
          href={`${BASE_URL}/tags/${encodeURIComponent(tag)}`}
          key="canonical"
        />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Posts tagged with {tag}
          </h1>
          <MoreStories posts={allPostsByTag} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
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
  const allPostsByTag = getAllPostsByTag(params.tag, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "tags",
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
    props: { allPosts, allPostsByTag, tag: params.tag },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["tags"]);
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag: string) => uniqueTags.add(tag));
  });

  return {
    fallback: false,
    paths: Array.from(uniqueTags).map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
  };
}
