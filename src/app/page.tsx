import { Metadata } from "next";
import { Post } from "src/interfaces/post";
import { generateRssFeed, getAllPosts } from "src/lib/api";
import { BASE_URL } from "src/lib/constants";
import HomePage from "./home-page";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  title: "Best Seen on Foot",
};

const getPosts = () => {
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

export default function Page() {
  const getAllPosts = getPosts();
  return <HomePage allPosts={getAllPosts} />;
}
