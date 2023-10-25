import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import Link from "next/link";

interface Props {
  allPosts: Post[];
}

export default function Locations({ allPosts }: Props) {
  return (
    <Container>
      <section className="container prose mx-auto mb-32 max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
        <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          Locations
        </h1>
        <article>
          <ul>
            <li>
              <Link href="/locations/south-america">South America</Link>
              <ul>
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
            <li>
              <Link href="/locations/oceania">Oceania</Link>
              <ul>
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
  );
}
