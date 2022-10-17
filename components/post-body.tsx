import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";

const components: Components = {
  img: ({ src, alt, title }) => {
    return (
      <Image
        src={src ?? ""}
        alt={alt}
        title={title}
        width="2000"
        height="1000"
      />
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
