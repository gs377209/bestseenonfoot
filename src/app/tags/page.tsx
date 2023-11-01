import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Tags from "./tags";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/tags` },
  title: "Tags",
};

const getPostsAndTags = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]) as Post[];
  const uniqueTags = new Set<string>();
  allPosts.forEach((post) => {
    post.tags.forEach((tag: string) => uniqueTags.add(tag));
  });

  return {
    allPosts,
    tags: Array.from(uniqueTags),
  };
};

export default async function Page() {
  const { allPosts, tags } = await getPostsAndTags();

  return <Tags allPosts={allPosts} tags={tags} />;
}
