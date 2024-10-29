import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          a: ({ node, children, href, ref, ...rest }) => {
            if (/youtube-nocookie\.com/.test(href ?? "")) {
              return (
                <iframe
                  src={href}
                  title={`${children?.toString()} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                >
                  {children}
                </iframe>
              );
            } else if (/youtube\.com/.test(href ?? "")) {
              const videoId = href?.split("/").pop();
              return (
                <YouTubeEmbed
                  videoid={videoId ?? ""}
                  playlabel={`Play ${children?.toString()} Video`}
                />
              );
            }
            return (
              <Link {...rest} href={href ?? ""}>
                {children}
              </Link>
            );
          },
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          img: ({ node, src, alt, title, ref, ...rest }) => {
            return (
              <Image
                {...rest}
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
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          p: ({ node, children, ...rest }) => {
            const isYoutubeEmbed =
              React.Children.toArray(children).findIndex((child) => {
                if (
                  React.isValidElement<{
                    node: { tagName: string };
                    href?: string;
                  }>(child)
                ) {
                  return (
                    child.props.node.tagName === "a" &&
                    /youtube\.com/.test(child.props.href ?? "")
                  );
                }
              }) !== -1;
            if (isYoutubeEmbed) {
              return (
                <div {...rest} className="my-5">
                  {children}
                </div>
              );
            }
            return <p {...rest}>{children}</p>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default PostBody;
