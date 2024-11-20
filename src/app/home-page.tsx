import Container from "@/components/container";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default function HomePage({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 7);

  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <div className="mt-8 text-center">
          <Link
            href="/posts"
            className="text-3xl font-medium text-gray-900 underline text-center"
          >
            See all posts &gt;
          </Link>
        </div>
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
