import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  src: string;
  slug?: string;
  isShareImage?: boolean;
  priority: boolean;
}

const CoverImage = ({ title, src, slug, isShareImage, priority }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm", {
        "transition-shadow duration-200 hover:shadow-lg": slug,
      })}
      width="1036"
      height="691"
      priority={priority}
      itemProp={isShareImage ? "image" : undefined}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0uTyzHgAFBAIh7MnC9QAAAABJRU5ErkJggg=="
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        <Link href={src}>{image}</Link>
      )}
    </div>
  );
};

export default CoverImage;
