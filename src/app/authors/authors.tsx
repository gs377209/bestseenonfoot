import Avatar from "@/components/avatar";
import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import { Suspense } from "react";

interface Props {
  allPosts: Post[];
}

export default function Authors({ allPosts }: Props) {
  return (
    <Container>
      <section className="container mx-auto lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Authors
        </h1>
        <ul className="grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
          <li>
            <Link
              href={`/authors/lauren`}
              className="font-medium text-gray-900 underline"
            >
              <Avatar
                name="Lauren Schirtzinger"
                picture="/assets/authors/lauren.jpg"
                large
                priority={false}
              />
            </Link>
          </li>
          <li>
            <Link
              href={`/authors/gerrod`}
              className="font-medium text-gray-900 underline"
            >
              <Avatar
                name="Gerrod Schirtzinger"
                picture="/assets/authors/gerrod.jpg"
                large
                priority={false}
              />
            </Link>
          </li>
        </ul>
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
