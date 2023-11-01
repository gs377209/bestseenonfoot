import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByDate } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import MonthArchives from "./month";

interface Props {
  params: {
    month: string;
    year: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const titleText = `${format(
    parseISO(
      `${params.year.padStart(4, "0")}-${params.month.padStart(
        2,
        "0",
      )}-01T17:00:00.000Z`,
    ),
    "LLLL, yyyy",
  )}`;

  return {
    alternates: {
      canonical: `${BASE_URL}/archives/${params.year}/${params.month}`,
    },
    title: titleText,
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts(["date"]);

  return [
    ...posts.map((post) => {
      const date = parseISO(post.date);
      return {
        month: (date.getMonth() + 1).toString(),
        year: date.getFullYear().toString(),
      };
    }),
  ];
}

const getPosts = async (params: Props["params"]) => {
  const allPostsByDate = getAllPostsByDate(params, [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
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

  return { allPosts, allPostsByDate };
};

export default async function Page({ params }: Props) {
  const { allPosts, allPostsByDate } = await getPosts(params);

  return <MonthArchives allPosts={allPosts} allPostsByDate={allPostsByDate} />;
}
