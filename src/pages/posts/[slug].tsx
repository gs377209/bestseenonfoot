import { getAllPosts, getPostBySlug } from "../../lib/api";
import Container from "../../components/container";
import ErrorPage from "next/error";
import Head from "next/head";
import PostBody from "../../components/post-body";
import PostFooter from "../../components/post-footer";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import type PostType from "../../interfaces/post";
import SideBar from "../../components/side-bar";
import { useRouter } from "next/router";

type Props = {
  post: PostType;
  allPosts: PostType[];
  morePosts: PostType[];
};

export default function Post({ post, allPosts, morePosts }: Props) {
  const router = useRouter();
  const titleText = `${post.title} | Best Seen On Foot`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="container mx-auto mb-32 lg:col-span-2">
              <Head>
                <title>{titleText}</title>
                <meta name="description" content={post.excerpt} key="desc" />
                <meta property="og:title" content={titleText} key="og:title" />
                <meta
                  property="og:description"
                  content={post.excerpt}
                  key="og:description"
                />
                <meta
                  property="og:image"
                  content={post.ogImage.url}
                  key="og:image"
                />
                <meta property="og:type" content="article" key="og:type" />
                <meta
                  property="og:site_name"
                  content="Best Seen On Foot"
                  key="og:site_name"
                />
                <meta
                  property="og:url"
                  content={`https://bestseenonfoot.com/posts/${post.slug}`}
                  key="og:url"
                />
                <meta
                  name="twitter:card"
                  content="summary"
                  key="twitter:card"
                />
                <meta
                  name="twitter:url"
                  content={`https://bestseenonfoot.com/posts/${post.slug}`}
                  key="twitter:url"
                />
                <meta
                  name="twitter:title"
                  content={titleText}
                  key="twitter:title"
                />
                <meta
                  name="twitter:description"
                  content={post.excerpt}
                  key="twitter:description"
                />
                <meta
                  name="twitter:image"
                  content={post.ogImage.url}
                  key="twitter:image"
                />
                <meta
                  name="twitter:creator"
                  content="@bestseenonfoot"
                  key="twitter:creator"
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                location={post.location}
                tags={post.tags}
              />
              <PostBody content={post.content} />
              <PostFooter morePosts={morePosts} />
            </article>
          </>
        )}
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "location",
    "tags",
    "excerpt",
  ]);
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  const morePosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return {
    props: {
      allPosts,
      morePosts,
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    fallback: false,
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
  };
}
