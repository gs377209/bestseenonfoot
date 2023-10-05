import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByPlace } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import Head from "next/head";

interface Props {
  allPosts: Post[];
  allPostsByPlace: Post[];
  place: string;
  placeUrl: string;
}

export default function Place({
  allPosts,
  allPostsByPlace,
  place,
  placeUrl,
}: Props) {
  const titleText = `${place} Posts | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link
          rel="canonical"
          href={`${BASE_URL}/locations/${placeUrl}`}
          key="canonical"
        />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Posts from {place}
          </h1>
          <MoreStories posts={allPostsByPlace} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

interface Params {
  params: {
    place: string[];
  };
}

export const getStaticProps = async ({ params }: Params) => {
  const allPostsByPlace = getAllPostsByPlace(
    params.place[params.place.length - 1],
    [
      "title",
      "date",
      "slug",
      "author",
      "coverImage",
      "tags",
      "excerpt",
      "location",
    ],
  );
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      allPosts,
      allPostsByPlace,
      place: params.place[params.place.length - 1]
        .split("-")
        .reduce((pc, cc) => {
          return `${pc} ${cc.charAt(0).toUpperCase() + cc.slice(1)}`;
        }, "")
        .trim(),
      placeUrl: params.place.join("/"),
    },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["location"]) as Post[];

  const urls: string[][] = [];
  posts.forEach((post) => {
    post.location.url.split("/").forEach((path, i, paths) => {
      if (i > 0) {
        urls.push([...paths.slice(0, i), path]);
      } else {
        urls.push([path]);
      }
    });
  });

  return {
    fallback: false,
    paths: urls.map((url) => {
      return {
        params: {
          place: url,
        },
      };
    }),
  };
}
