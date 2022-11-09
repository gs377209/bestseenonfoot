import { getAllPosts, getPostBySlug } from "../../lib/api";
import { BASE_URL } from "../../lib/constants";
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
  const { isFallback } = useRouter();
  const titleText = `${post.title} | Best Seen On Foot`;

  if (!isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Container>
        {isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article
              className="container mx-auto mb-32 lg:col-span-2"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Head>
                <title>{titleText}</title>
                <link
                  rel="canonical"
                  href={`${BASE_URL}/posts/${post.slug}`}
                  key="canonical"
                />
                <meta
                  name="description"
                  content={post.excerpt}
                  key="desc"
                  itemProp="abstract"
                />
                <meta
                  property="og:title"
                  content={post.title}
                  key="og:title"
                  itemProp="headline"
                />
                <meta
                  property="og:description"
                  content={post.excerpt}
                  key="og:description"
                />
                <meta
                  property="og:image"
                  content={BASE_URL + post.ogImage.url}
                  key="og:image"
                />
                <meta property="og:type" content="article" key="og:type" />
                <meta
                  property="article:published_time"
                  content={post.date}
                  itemProp="datePublished"
                />
                <meta
                  property="article:modified_time"
                  content={post.date}
                  itemProp="dateModified"
                />
                <meta
                  property="article:expiration_time"
                  content="2100-01-01T00:00:00.000Z"
                  itemProp="expires"
                />
                <meta
                  property="article:author:first_name"
                  content={post.author.name.split(" ")[0]}
                />
                <meta
                  property="article:author:last_name"
                  content={post.author.name.split(" ")[1]}
                />
                <meta
                  property="article:author:username"
                  content={post.author.url}
                />
                <meta
                  property="author:first_name"
                  content={post.author.name.split(" ")[0]}
                />
                <meta
                  property="author:last_name"
                  content={post.author.name.split(" ")[1]}
                />
                <meta property="author:username" content={post.author.url} />
                <meta
                  property="article:section"
                  content="Travel"
                  itemProp="articleSection"
                />
                {post.tags.sort().map((tag) => {
                  return (
                    <meta property="article:tag" content={tag} key={tag} />
                  );
                })}
                <meta
                  property="og:url"
                  content={`${BASE_URL}/posts/${post.slug}`}
                  key="og:url"
                  itemProp="url"
                />
                <meta
                  name="twitter:url"
                  content={`${BASE_URL}/posts/${post.slug}`}
                  key="twitter:url"
                />
                <meta
                  name="twitter:title"
                  content={post.title}
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
                  name="twitter:image:alt"
                  content={`${post.title} Feature Image`}
                  key="twitter:image:alt"
                />
                <meta
                  name="og:image:alt"
                  content={`${post.title} Feature Image`}
                  key="og:image:alt"
                />
                <meta name="author" content={post.author.name} key="author" />
                <meta
                  name="publish_date"
                  property="og:publish_date"
                  content={post.date}
                  key="publish_date"
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
              <PostFooter morePosts={morePosts} slug={post.slug} />
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
