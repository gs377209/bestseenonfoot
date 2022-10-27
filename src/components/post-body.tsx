import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/future/image";

const components: Components = {
  // eslint-disable-next-line no-unused-vars
  a: ({ node, children, href, ...props }) => {
    if (/youtube-nocookie\.com/.test(href ?? "")) {
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
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
  img: ({ src, alt, title }) => {
    return (
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        title={title}
        width="5184"
        height="3456"
      />
    );
  },
};

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="prose max-w-none md:prose-lg lg:prose-xl">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
};

export default PostBody;
