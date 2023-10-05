import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import WhereWeveBeen from "./where-weve-been";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/where-weve-been` },
  title: "Where We've Been | Best Seen on Foot",
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

  return <WhereWeveBeen allPosts={allPosts} />;
}
