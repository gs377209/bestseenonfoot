import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import { Post } from "src/interfaces/post";
import { generateRssFeed, getAllPosts } from "src/lib/api";
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
  generateRssFeed();

  return allPosts;
};

export default async function Page() {
  const getAllPosts = await getPosts();
  return <HomePage allPosts={getAllPosts} />;
}
