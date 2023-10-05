"use client";

import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Search from "@/components/search";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
  filteredPosts: Post[];
  search: string;
}

export default function SearchResults({
  allPosts,
  filteredPosts,
  search,
}: Props) {
  return (
    <Container>
      <section className="mx-auto mb-32 lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Search Results For &quot;{search}&quot;
        </h1>
        <div className="mb-10">
          <Search />
        </div>
        <MoreStories posts={filteredPosts} hideHeader />
      </section>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
