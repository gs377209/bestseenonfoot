import { Post } from "src/interfaces/post";
import { getAllPosts } from "src/lib/api";
import ContactUs from "./contact-us";

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
