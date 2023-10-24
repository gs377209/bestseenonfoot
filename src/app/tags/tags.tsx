import Container from "@/components/container";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Props {
  allPosts: Post[];
  tags: string[];
}

export default function Tags({ allPosts, tags }: Props) {
  return (
    <Container>
      <section className="container mx-auto mb-32 lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Tags
        </h1>
        <ul className="mb-32 grid grid-cols-2 gap-y-20 md:grid-cols-4 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
          {tags.sort().map((tag) => {
            return (
              <li key={tag}>
                <FontAwesomeIcon icon={faTag} />{" "}
                <Link
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="font-medium text-gray-900 underline"
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
