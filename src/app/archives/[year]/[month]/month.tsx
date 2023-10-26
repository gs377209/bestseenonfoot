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

export default function MonthArchives({ allPosts, allPostsByDate }: Props) {
  const firstPost = allPostsByDate[0];

  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts from{" "}
          <DateFormatter
            dateString={firstPost.date}
            customFormat="LLLL, yyyy"
          />
        </h1>
        <MoreStories posts={allPostsByDate} hideHeader />
      </section>
      <Suspense
        fallback={
          <aside className="animate-pulse mt-4 lg:mt-0 lg:sticky lg:top-[3.8125rem] lg:col-span-1 lg:col-start-3 lg:h-[calc(100vh-2.75rem)] lg:self-start lg:overflow-y-auto lg:overflow-x-hidden"></aside>
        }
      >
        <SideBar allPosts={allPosts} />
      </Suspense>
    </Container>
  );
}
