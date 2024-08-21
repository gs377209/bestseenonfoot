import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import Search from "@/components/search";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { Suspense } from "react";

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
      <section className="mx-auto lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8">
          Search Results For &quot;{search}&quot;
        </h1>
        <div className="mb-10">
          <Search />
        </div>
        <MoreStories posts={filteredPosts} hideHeader />
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
