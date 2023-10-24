import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Locations from "./locations";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/locations` },
  title: "Locations | Best Seen on Foot",
};

const getPosts = async () => {
  return getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];
};

export default async function Page() {
  const allPosts = await getPosts();

  return <Locations allPosts={allPosts} />;
}
