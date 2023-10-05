import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import { Post } from "src/interfaces/post";
import { getAllPosts } from "src/lib/api";
import PrivacyPolicy from "./privacy-policy";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  title: "Privacy Policy | Best Seen on Foot",
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
  // Fetch data directly in a Server Component
  const allPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <PrivacyPolicy allPosts={allPosts} />;
}
