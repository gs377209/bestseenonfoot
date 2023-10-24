import Container from "@/components/container";
import PostBody from "@/components/post-body";
import PostFooter from "@/components/post-footer";
import PostHeader from "@/components/post-header";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";

interface Props {
  post: Post;
  allPosts: Post[];
  morePosts: Post[];
}

export default function PostPage({ post, allPosts, morePosts }: Props) {
  return (
    <Container>
      <article
        className="container mx-auto mb-32 lg:col-span-2"
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
        <PostFooter morePosts={morePosts} slug={post.slug} />
      </article>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
