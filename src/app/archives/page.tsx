import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Archives from "./archives";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/archives` },
  title: "Archives",
};

const getPosts = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];

  return { allPosts };
};

export default async function Page() {
  const { allPosts } = await getPosts();

  return <Archives allPosts={allPosts} />;
}
