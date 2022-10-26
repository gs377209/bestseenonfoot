import Container from "../components/container";
import Head from "next/head";
import PostType from "../interfaces/post";
import SideBar from "../components/side-bar";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: PostType[];
};

export default function WhereWeveBeen({ allPosts }: Props) {
  const titleText = `Best Seen on Foot | Where We've Been`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <section className="container mx-auto mb-32 lg:col-span-2">
          <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
            Where We&apos;ve Been
          </h1>
          <article>
            <iframe
              className="w-full"
              src="https://www.google.com/maps/d/embed?mid=1mIGNqlUCFqtjP5HGoJlQ-mQJPY9knSEM&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
            <p>List of continents &gt; countries</p>
          </article>
        </section>
        <SideBar allPosts={allPosts} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
