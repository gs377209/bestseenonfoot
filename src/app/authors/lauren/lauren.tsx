"use client";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
  allPostsByAuthor: Post[];
}

export default function Lauren({ allPosts, allPostsByAuthor }: Props) {
  return (
    <Container>
      <section className="mx-auto mb-32 lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts by Lauren
        </h1>
        <MoreStories posts={allPostsByAuthor} hideHeader />
      </section>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
