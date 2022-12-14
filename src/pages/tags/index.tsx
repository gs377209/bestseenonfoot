import { BASE_URL } from "../../lib/constants";
import Container from "../../components/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import Link from "next/link";
import Post from "../../interfaces/post";
import SideBar from "../../components/side-bar";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { getAllPosts } from "../../lib/api";

type Props = {
  allPosts: Post[];
  tags: string[];
};

export default function Tags({ allPosts, tags }: Props) {
  const titleText = `Tags | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/tags`} key="canonical" />
      </Head>
      <Container>
        <section className="container mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Tags
          </h1>
          <ul className="mb-32 grid grid-cols-2 gap-y-20 md:grid-cols-4 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
            {tags.sort().map((tag) => {
              return (
                <li key={tag}>
                  <FontAwesomeIcon icon={faTag} />{" "}
                  <Link
                    href={`/tags/${encodeURIComponent(tag)}`}
                    className="font-medium text-gray-900 underline"
                  >
                    {tag}
                  </Link>
                </li>
              );
            })}
          </ul>
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
    "tags",
  ]);
  const uniqueTags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags.forEach((tag: string) => uniqueTags.add(tag));
  });

  return {
    props: { allPosts, tags: Array.from(uniqueTags) },
  };
};
