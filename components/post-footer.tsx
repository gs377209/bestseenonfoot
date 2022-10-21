import { useRouter } from "next/router";
import { BASE_URL } from "../lib/constants";
import MoreStories from "./more-stories";
import Post from "../interfaces/post";

type Props = {
  morePosts: Post[];
};

export default function PostFooter({ morePosts }: Props) {
  const { asPath } = useRouter();
  const shareURL = BASE_URL + asPath;

  return (
    <div>
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-7xl">
        Share this
      </h2>
      <div className="mb-5 flex">
        <div
          className="fb-share-button mr-2"
          data-href={shareURL}
          data-layout="button_count"
          data-size="large"
        >
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareURL
            )}&amp;src=sdkpreparse`}
            className="fb-xfbml-parse-ignore"
            rel="noreferrer noopener"
          >
            Share
          </a>
        </div>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          className="twitter-share-button"
          data-size="large"
          data-text="Check out this article from Best Seen on Foot!"
          data-via="bestseenonfoot"
          data-hashtags="travel"
          data-show-count="true"
        >
          Tweet
        </a>
      </div>

      <MoreStories posts={morePosts} />
      {/* TODO: Comments and add comment */}
    </div>
  );
}
