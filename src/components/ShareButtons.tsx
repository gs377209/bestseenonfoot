import Link from "next/link";

interface Props {
  shareURL: string;
}

export default function ShareButtons({ shareURL }: Props) {
  return (
    <div className="mb-5 flex">
      <div
        className="fb-share-button mr-2"
        data-href={shareURL}
        data-layout="button"
        data-size="large"
        data-lazy="true"
      >
        <Link
          key={`share-buttons-fb-${shareURL}`}
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
        key={`share-buttons-twitter-${shareURL}`}
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
  );
}
