import { Post } from "@/interfaces/post";
import { getAllPosts, getAllPostsByDate } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import DateArchives from "./date";

interface Props {
  params: Promise<{
    date: string;
    month: string;
    year: string;
  }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const titleText = `${format(
    parseISO(
      `${params.year.padStart(4, "0")}-${params.month.padStart(
        2,
        "0",
      )}-${params.date.padStart(2, "0")}T17:00:00.000Z`,
    ),
    "LLLL	d, yyyy",
  )}`;

  return {
    alternates: {
      canonical: `${BASE_URL}/archives/${params.year}/${params.month}/${params.date}`,
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
        date: date.getDate().toString(),
        month: (date.getMonth() + 1).toString(),
        year: date.getFullYear().toString(),
      };
    }),
  ];
}

const getPosts = async (params: {
  date: string;
  month: string;
  year: string;
}) => {
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

export default async function Page(props: Props) {
  const params = await props.params;
  const { allPosts, allPostsByDate } = await getPosts(params);

  return <DateArchives allPosts={allPosts} allPostsByDate={allPostsByDate} />;
}
