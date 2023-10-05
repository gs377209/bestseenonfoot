import Link from "next/link";
import { Post } from "../interfaces/post";
import { BASE_URL } from "../lib/constants";
import MoreStories from "./more-stories";

interface Props {
  morePosts: Post[];
  slug: string;
}

export default function PostFooter({ morePosts, slug }: Props) {
  const shareURL = BASE_URL + slug;

  return (
    <div>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Share This Post!
      </h2>
      <div className="mb-5 flex">
        <div
          className="fb-share-button mr-2"
          data-href={shareURL}
          data-layout="button"
          data-size="large"
          data-lazy="true"
        >
          <Link
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareURL,
            )}&amp;src=sdkpreparse`}
            className="fb-xfbml-parse-ignore"
            rel="noreferrer noopener"
          >
            Share
          </Link>
        </div>
        <Link
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-size="large"
          data-text="Check out this article from Best Seen on Foot!"
          data-via="bestseenonfoot"
          data-hashtags="travel"
          data-show-count="true"
          data-lazy="true"
        >
          Tweet
        </Link>
      </div>

      <MoreStories posts={morePosts} />
      {/* TODO: Comments and add comment */}
    </div>
  );
}
