import { format, parseISO } from "date-fns";
import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Fragment } from "react";
import Link from "next/link";
import Location from "../interfaces/location";
import PostTitle from "./post-title";

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
    <div className="">
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:mb-12 md:block">
        <Link href={`/authors/${author.url}`}>
          <a className="font-medium text-gray-900 underline">
            <Avatar name={author.name} picture={author.picture} />
          </a>
        </Link>
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="mx-auto">
        <div className="mb-6 block md:hidden">
          <Link href={`/authors/${author.url}`}>
            <a className="font-medium text-gray-900 underline">
              <Avatar name={author.name} picture={author.picture} />
            </a>
          </Link>
        </div>
        <div className="mb-6 flex flex-col text-lg">
          <Link href={`/archives/${format(parseISO(date), "yyyy/MM/dd")}`}>
            <a className="font-medium text-gray-900 underline">
              <DateFormatter dateString={date} />
            </a>
          </Link>
          <div>
            Location:{" "}
            <Link href={`/locations/${location.url}`}>
              <a className="font-medium text-gray-900 underline">
                {location.name}
              </a>
            </Link>
          </div>
          <div>
            Tags:{" "}
            {tags.map((tag, index) => {
              return (
                <Fragment key={tag}>
                  <Link href={`/tags/${tag}`}>
                    <a className="font-medium text-gray-900 underline">{tag}</a>
                  </Link>
                  {index + 1 !== tags.length && ", "}
                </Fragment>
              );
            })}
          </div>
          {/* TODO: comment count/link */}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
