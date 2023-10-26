import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default function Posts({ allPosts }: Props) {
  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts
        </h1>
        <MoreStories posts={allPosts} hideHeader />
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
