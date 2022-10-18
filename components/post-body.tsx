import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/future/image";
import markdownStyles from "./markdown-styles.module.css";

const components: Components = {
  img: ({ src, alt, title }) => {
    return (
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        title={title}
        width="2000"
        height="1000"
      />
    );
  },
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
};

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto max-w-2xl">
      <ReactMarkdown
        className={markdownStyles["markdown"]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
