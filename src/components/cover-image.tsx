import Image from "next/future/image";
import Link from "next/link";
import cn from "classnames";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "transition-shadow duration-200 hover:shadow-lg": slug,
      })}
      width="5184"
      height="3456"
      priority
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        <a href={src}>{image}</a>
      )}
    </div>
  );
};

export default CoverImage;
