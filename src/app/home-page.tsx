import { Suspense } from "react";
import Container from "src/components/container";
import HeroPost from "src/components/hero-post";
import Intro from "src/components/intro";
import MoreStories from "src/components/more-stories";
import SideBar from "src/components/side-bar";
import { Post } from "src/interfaces/post";

interface Props {
  allPosts: Post[];
}

export default function HomePage({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

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
      </section>
      <Suspense
        fallback={
          <aside className="animate-pulse bg-gray-700 mt-4 lg:mt-0 lg:sticky lg:top-[3.8125rem] lg:col-span-1 lg:col-start-3 lg:h-[calc(100vh-2.75rem)] lg:self-start lg:overflow-y-auto lg:overflow-x-hidden"></aside>
        }
      >
        <SideBar allPosts={allPosts} />
      </Suspense>
    </Container>
  );
}
