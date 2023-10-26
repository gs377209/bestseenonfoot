import Container from "@/components/container";
import DateFormatter from "@/components/date-formatter";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
  allPostsByDate: Post[];
}

export default function YearArchives({ allPosts, allPostsByDate }: Props) {
  const firstPost = allPostsByDate[0];

  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts from{" "}
          <DateFormatter dateString={firstPost.date} customFormat="yyyy" />
        </h1>
        <MoreStories posts={allPostsByDate} hideHeader />
      </section>
      <Suspense fallback={null}>
        <SideBar allPosts={allPosts} />
      </Suspense>
    </Container>
  );
}
