import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  condensed?: boolean;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  condensed,
}: Props) => {
  return (
    <article>
      {condensed ? (
        <>
          <div className="mb-5 w-32">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <h3 className="mb-3 text-lg leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-sm">
            <DateFormatter dateString={date} />
          </div>
        </>
      ) : (
        <>
          <div className="mb-5">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <h3 className="mb-3 text-3xl leading-snug">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg">
            <DateFormatter dateString={date} />
          </div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </>
      )}
    </article>
  );
};

export default PostPreview;