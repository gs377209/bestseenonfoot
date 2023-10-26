import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import Link from "next/link";

interface Props {
  allPosts: Post[];
}

export default function WhereWeveBeen({ allPosts }: Props) {
  return (
    <Container>
      <section className="container prose mx-auto max-w-none md:prose-lg lg:prose-xl lg:col-span-2">
        <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl">
          Where We&apos;ve Been
        </h1>
        <article>
          <iframe
            className="w-full"
            src="https://www.google.com/maps/d/embed?mid=1mIGNqlUCFqtjP5HGoJlQ-mQJPY9knSEM&ehbc=2E312F"
            width="640"
            height="480"
            title="Our Map"
          ></iframe>
          <h2 className="mb-12 text-center text-4xl font-bold leading-tight tracking-tighter md:text-left md:text-6xl md:leading-none lg:text-7xl">
            Locations
          </h2>
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
  );
}
