import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import SideBar from "@/components/side-bar";
import { Post } from "@/interfaces/post";

interface Props {
  allPosts: Post[];
  allPostsByPlace: Post[];
  place: string;
}

export default function Place({ allPosts, allPostsByPlace, place }: Props) {
  return (
    <Container>
      <section className="mx-auto lg:col-span-2">
        <h1 className="mb-5 text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-7xl">
          Posts from {place}
        </h1>
        <MoreStories posts={allPostsByPlace} hideHeader />
      </section>
      <SideBar allPosts={allPosts} />
    </Container>
  );
}
