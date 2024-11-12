import { Post } from "@/interfaces/post";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import ContactUs from "./contact-us";

export const metadata: Metadata = {
  alternates: { canonical: `${BASE_URL}/contact-us` },
  robots: { follow: false, index: false },
  title: "Contact Us",
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

  return <ContactUs allPosts={allPosts} />;
}
