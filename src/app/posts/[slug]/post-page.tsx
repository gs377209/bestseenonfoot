import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostFooter from "@/components/post-footer";
import PostHeader from "@/components/post-header";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { Suspense } from "react";

interface Props {
  post: Post;
  allPosts: Post[];
  morePosts: Post[];
}

export default function PostPage({ post, allPosts, morePosts }: Props) {
  return (
    <Container>
      <article
        className="container mx-auto lg:col-span-2"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          location={post.location}
          tags={post.tags}
        />
        <PostBody content={post.content} />
        <Suspense fallback={<div></div>}>
          <PostFooter morePosts={morePosts} slug={post.slug} />
        </Suspense>
      </article>
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
