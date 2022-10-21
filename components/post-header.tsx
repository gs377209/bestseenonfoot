import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Location from "../interfaces/location";
import { Fragment } from "react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  location: Location;
  tags: string[];
};

const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  location,
  tags,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Link href={author.url}>
          <a className="text-blue-500 underline">
            <Avatar name={author.name} picture={author.picture} />
          </a>
        </Link>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          <Link href={author.url}>
            <a className="text-blue-500 underline">
              <Avatar name={author.name} picture={author.picture} />
            </a>
          </Link>
        </div>
        <div className="mb-6 flex flex-col text-lg">
          <Link href={`/archive/${format(parseISO(date), "yyyy/MM/dd")}`}>
            <a className="text-blue-500 underline">
              <DateFormatter dateString={date} />
            </a>
          </Link>
          <div>
            Location:{" "}
            <Link href={location.url}>
              <a className="text-blue-500 underline">{location.name}</a>
            </Link>
          </div>
          <div>
            Tags:{" "}
            {tags.map((tag, index) => {
              return (
                <Fragment key={tag}>
                  <Link href={`/tag/${tag}`}>
                    <a className="text-blue-500 underline">{tag}</a>
                  </Link>
                  {index + 1 !== tags.length && ", "}
                </Fragment>
              );
            })}
          </div>
          {/* TODO: comment count/link */}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
