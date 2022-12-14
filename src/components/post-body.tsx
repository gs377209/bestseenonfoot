import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/image";
import Link from "next/link";

const components: Components = {
  // eslint-disable-next-line no-unused-vars
  a: ({ node, children, href, ...props }) => {
    if (/(youtube-nocookie|youtube)\.com/.test(href ?? "")) {
      return (
        <iframe
          width="560"
          height="315"
          src={href}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }
    return (
      <Link href={href ?? ""} {...props}>
        {children}
      </Link>
    );
  },
  img: ({ src, alt, title }) => {
    return (
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        title={title}
        width="1036"
        height="691"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0uTyzHgAFBAIh7MnC9QAAAABJRU5ErkJggg=="
      />
    );
  },
};

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose mb-5 max-w-none md:prose-lg lg:prose-xl"
      itemProp="articleBody"
    >
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default PostBody;
