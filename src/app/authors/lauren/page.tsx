import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByAuthor } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Lauren from "./lauren";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/authors/lauren` },
  title: "Lauren's Posts",
};

const getPosts = async () => {
  const allPostsByAuthor = getAllPostsByAuthor("lauren", [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];

  return { allPosts, allPostsByAuthor };
};

export default async function Page() {
  const { allPosts, allPostsByAuthor } = await getPosts();

  return <Lauren allPosts={allPosts} allPostsByAuthor={allPostsByAuthor} />;
}
