import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import { Post } from "src/interfaces/post";
import { getAllPosts } from "src/lib/api";
import ContactUs from "./contact-us";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/contact-us` },
  title: "Contact Us | Best Seen on Foot",
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
  return <ContactUs allPosts={allPosts} />;
}
