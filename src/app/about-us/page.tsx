import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import AboutUs from "./about-us";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/about-us` },
  title: "About Us",
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

  return <AboutUs allPosts={allPosts} />;
}
