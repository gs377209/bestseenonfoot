import Container from "../../components/container";
import Head from "next/head";
import Link from "next/link";
import PostType from "../../interfaces/post";
import SideBar from "../../components/side-bar";
import { getAllPosts } from "../../lib/api";

type Props = {
  allPosts: PostType[];
};

export default function WhereWeveBeen({ allPosts }: Props) {
  const titleText = `Locations | Best Seen on Foot`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Container>
        <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:col-span-2 lg:prose-xl">
          <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
            Locations
          </h1>
          <article>
            <ul>
              <li>
                <Link href="/locations/south-america">
                  <a>South America</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/locations/south-america/ecuador">
                      <a>Ecuador</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/locations/oceania">
                  <a>Oceania</a>
                </Link>
                <ul>
                  <li>
                    <Link href="/locations/oceania/french-polynesia">
                      <a>French Polynesia</a>
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
