import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default function Locations({ allPosts }: Props) {
  return (
    <Container>
      <section className="container prose mx-auto max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
        <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          Locations
        </h1>
        <article>
          <ul>
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
            <li>
              <Link href="/locations/south-america">South America</Link>
              <ul>
                <li>
                  <Link href="/locations/south-america/argentina">
                    Argentina
                  </Link>
                </li>
                <li>
                  <Link href="/locations/south-america/chile">Chile</Link>
                </li>
                <li>
                  <Link href="/locations/south-america/ecuador">Ecuador</Link>
                </li>
                <li>
                  <Link href="/locations/south-america/paraguay">Paraguay</Link>
                </li>
                <li>
                  <Link href="/locations/south-america/peru">Peru</Link>
                </li>
              </ul>
            </li>
          </ul>
        </article>
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
