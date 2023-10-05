"use client";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
}

export default function Posts({ allPosts }: Props) {
  return (
    <Container>
      <section className="mx-auto mb-32 lg:col-span-2">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts
        </h1>
        <MoreStories posts={allPosts} hideHeader />
      </section>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
