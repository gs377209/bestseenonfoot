import { Post } from "@/interfaces/post";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import PostPage from "./post-page";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "location",
    "tags",
    "excerpt",
  ]) as Post;

  return {
    alternates: {
      canonical: `${BASE_URL}/posts/${post.slug}`,
    },
    authors: [
      {
        name: post.author.name,
        url: `${BASE_URL}/authors/${post.author.url}`,
      },
    ],
    description: post.excerpt,
    openGraph: {
      authors: [post.author.name],
      description: post.excerpt,
      expirationTime: "2100-01-01T00:00:00.000Z",
      images: [
        {
          alt: `${post.title} Feature Image`,
          url: BASE_URL + post.ogImage.url,
        },
      ],
      modifiedTime: post.date,
      publishedTime: post.date,
      section: "Travel",
      tags: post.tags.sort(),
      title: post.title,
      type: "article",
      url: `${BASE_URL}/posts/${post.slug}`,
    },
    other: {
      publish_date: post.date,
    },
    title: `${post.title}`,
    twitter: {
      description: post.excerpt,
      images: [
        {
          alt: `${post.title} Feature Image`,
          url: BASE_URL + post.ogImage.url,
        },
      ],
      title: post.title,
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return [
    ...posts.map((post) => {
      return {
        slug: post.slug,
      };
    }),
  ];
}

const getPosts = async (params: Props["params"]) => {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "location",
    "tags",
    "excerpt",
  ]) as Post;
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];
  const morePosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return {
    allPosts,
    morePosts,
    post,
  };
};

export default async function Page({ params }: Props) {
  const { allPosts, morePosts, post } = await getPosts(params);

  return <PostPage allPosts={allPosts} morePosts={morePosts} post={post} />;
}
