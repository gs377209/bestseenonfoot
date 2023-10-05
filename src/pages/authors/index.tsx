import Avatar from "@/components/avatar";
import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import Head from "next/head";
import Link from "next/link";

interface Props {
  allPosts: Post[];
}

export default function Authors({ allPosts }: Props) {
  const titleText = `Authors | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="canonical" href={`${BASE_URL}/authors`} key="canonical" />
      </Head>
      <Container>
        <section className="container mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Authors
          </h1>
          <ul className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
            <li>
              <Link
                href={`/authors/lauren`}
                className="font-medium text-gray-900 underline"
              >
                <Avatar
                  name="Lauren Schirtzinger"
                  picture="/assets/authors/lauren.jpg"
                  large
                  priority={false}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`/authors/gerrod`}
                className="font-medium text-gray-900 underline"
              >
                <Avatar
                  name="Gerrod Schirtzinger"
                  picture="/assets/authors/gerrod.jpg"
                  large
                  priority={false}
                />
              </Link>
            </li>
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
  ]);

  return {
    props: { allPosts },
  };
};
