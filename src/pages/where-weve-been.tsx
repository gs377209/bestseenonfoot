import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";
import PostType from "../interfaces/post";
import SideBar from "../components/side-bar";
import { getAllPosts } from "../lib/api";

type Props = {
  allPosts: PostType[];
};

export default function WhereWeveBeen({ allPosts }: Props) {
  const titleText = `Where We've Been | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:col-span-2 lg:prose-xl">
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
            <ul>
              <li>
                <Link href="/locations/south-america">South America</Link>
                <ul>
                  <li>
                    <Link href="/locations/south-america/ecuador">Ecuador</Link>
                  </li>
                  <li>
                    <Link href="/locations/south-america/peru">Peru</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/locations/oceania">Oceania</Link>
                <ul>
                  <li>
                    <Link href="/locations/oceania/french-polynesia">
                      French Polynesia
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/oceania/new-zealand-south-island">
                      New Zealand - South Island
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
