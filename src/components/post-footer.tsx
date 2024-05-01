"use client";

import { Post } from "@/interfaces/post";
import { BASE_URL } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import ShareButtons from "./ShareButtons";
import MoreStories from "./more-stories";

interface Props {
  morePosts: Post[];
  slug: string;
}

export default function PostFooter({ morePosts, slug }: Props) {
  const shareURL = `${BASE_URL}/posts/${slug}`;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}${searchParams.toString() ? "?" + searchParams : ""}`;

  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Share This Post!
      </h2>
      <ShareButtons shareURL={shareURL} key={`share-buttons-${url}`} />

      <MoreStories posts={morePosts} />
      {/* TODO: Comments and add comment */}
    </div>
  );
}
