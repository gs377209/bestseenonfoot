import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default function Archives({ allPosts }: Props) {
  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Archives
        </h1>
        <MoreStories posts={allPosts} hideHeader />
      </section>
      <Suspense fallback={null}>
        <SideBar allPosts={allPosts} />
      </Suspense>
    </Container>
  );
}
