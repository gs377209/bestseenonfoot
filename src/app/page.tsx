import { Metadata } from "next";
import { Post } from "src/interfaces/post";
import { generateRssFeed, getAllPosts } from "src/lib/api";
import {
  BASE_URL,
  FACEBOOK_APP_ID,
  HOME_OG_IMAGE_URL,
} from "src/lib/constants";
import HomePage from "./home-page";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  authors: [{ name: "Best Seen on Foot" }],
  openGraph: {
    description: "A travel blog",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 512,
        height: 512,
        alt: "Best Seen on Foot Logo",
      },
    ],
    locale: "en_US",
    siteName: "Best Seen On Foot",
    title: "Best Seen On Foot",
    type: "website",
    url: BASE_URL,
  },
  title: "Best Seen on Foot",
  twitter: {
    card: "summary_large_image",
    creator: "@bestseenonfoot",
    description: "A travel blog",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        alt: "Best Seen on Foot Logo",
        width: 512,
        height: 512,
      },
    ],
    site: "@bestseenonfoot",
    title: "Best Seen On Foot",
  },
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
