import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByAuthor } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Gerrod from "./gerrod";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/authors/gerrod` },
  title: "Gerrod's Posts",
};

const getPosts = async () => {
  const allPostsByAuthor = getAllPostsByAuthor("gerrod", [
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

  return <Gerrod allPosts={allPosts} allPostsByAuthor={allPostsByAuthor} />;
}
