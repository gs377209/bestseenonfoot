import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Posts from "./posts";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/posts` },
  title: "Posts",
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

  return <Posts allPosts={allPosts} />;
}
