import { format, parseISO } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Container from "../../../../components/container";
import DateFormatter from "../../../../components/date-formatter";
import MoreStories from "../../../../components/more-stories";
import SideBar from "../../../../components/side-bar";
import { Post } from "../../../../interfaces/post";
import { getAllPosts, getAllPostsByDate } from "../../../../lib/api";
import { BASE_URL } from "../../../../lib/constants";

export default function MonthArchives({
  allPosts,
  allPostsByDate,
  params: { year, month },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const firstPost = allPostsByDate[0];
  const titleText = `${format(
    parseISO(firstPost.date),
    "LLLL, yyyy",
  )} | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link
          rel="canonical"
          href={`${BASE_URL}/archives/${year}/${month}`}
          key="canonical"
        />
      </Head>
      <Container>
        <section className="mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
            Posts from{" "}
            <DateFormatter
              dateString={firstPost.date}
              customFormat="LLLL, yyyy"
            />
          </h1>
          <MoreStories posts={allPostsByDate} hideHeader />
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

type Params = {
  params: {
    year: string;
    month: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
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

  return {
    props: { allPosts, allPostsByDate, params },
  };
};

export async function getStaticPaths() {
  const posts = getAllPosts(["date"]);

  return {
    fallback: false,
    paths: posts.map((post) => {
      const date = parseISO(post.date);
      return {
        params: {
          month: (date.getMonth() + 1).toString(),
          year: date.getFullYear().toString(),
        },
      };
    }),
  };
}
