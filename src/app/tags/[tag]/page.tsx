import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByTag } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { Metadata } from "next";
import Tag from "./tag";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  return {
    alternates: {
      canonical: `${BASE_URL}/tags/${params.tag}`,
    },
    title: `${decodeURIComponent(params.tag)} Posts`,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts(["tags"]);
  const uniqueTags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag: string) => uniqueTags.add(tag));
  });

  return [
    ...Array.from(uniqueTags).map((tag) => ({
      tag: tag,
      // Use this line when running dev
      // tag: encodeURIComponent(tag),
    })),
  ];
}

const getPostsAndTags = async (params: { tag: string }) => {
  const allPostsByTag = getAllPostsByTag(decodeURIComponent(params.tag), [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "tags",
    "excerpt",
  ]) as Post[];
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as Post[];

  return {
    allPosts,
    allPostsByTag,
    tag: decodeURIComponent(params.tag),
  };
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { allPosts, allPostsByTag, tag } = await getPostsAndTags(params);

  return <Tag allPosts={allPosts} allPostsByTag={allPostsByTag} tag={tag} />;
}
