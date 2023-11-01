import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByPlace } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Place from "./place";

interface Props {
  params: {
    place: string[];
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const place = params.place[params.place.length - 1]
    .split("-")
    .reduce((pc, cc) => {
      return `${pc} ${cc.charAt(0).toUpperCase() + cc.slice(1)}`;
    }, "")
    .trim();
  const placeUrl = params.place.join("/");

  return {
    alternates: {
      canonical: `${BASE_URL}/locations/${placeUrl}`,
    },
    title: `${place} Posts`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
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

  return [
    ...urls.map((url) => {
      return {
        place: url,
      };
    }),
  ];
}

const getPosts = async (params: Props["params"]) => {
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
  ) as Post[];
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];

  return {
    allPosts,
    allPostsByPlace,
    place: params.place[params.place.length - 1]
      .split("-")
      .reduce((pc, cc) => {
        return `${pc} ${cc.charAt(0).toUpperCase() + cc.slice(1)}`;
      }, "")
      .trim(),
  };
};

export default async function Page({ params }: Props) {
  const { allPosts, allPostsByPlace, place } = await getPosts(params);

  return (
    <Place
      allPosts={allPosts}
      allPostsByPlace={allPostsByPlace}
      place={place}
    />
  );
}
