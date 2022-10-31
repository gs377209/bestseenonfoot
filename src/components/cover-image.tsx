import Image from "next/image";
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
      width="1036"
      height="691"
      priority
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        <a href={src}>{image}</a>
      )}
    </div>
  );
};

export default CoverImage;
