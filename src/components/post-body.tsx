import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

const PostBody = ({ content }: Props) => {
  return (
    <div
      className="prose mb-5 max-w-none md:prose-lg lg:prose-xl"
      itemProp="articleBody"
    >
      <ReactMarkdown
        components={{
          // eslint-disable-next-line no-unused-vars
          a: ({ node, children, href, ref, ...props }) => {
            if (/(youtube-nocookie|youtube)\.com/.test(href ?? "")) {
              return (
                <iframe
                  src={href}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
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
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
