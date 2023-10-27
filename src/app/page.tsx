import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  title: "Best Seen on Foot",
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

  return allPosts;
};

export default async function Page() {
  const getAllPosts = await getPosts();

  return <HomePage allPosts={getAllPosts} />;
}
