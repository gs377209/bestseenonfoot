"use client";

import { Post } from "@/interfaces/post";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import FacebookPageBlock from "./FacebookPageBlock";
import GoogleAd from "./GoogleAd";
import MoreStories from "./more-stories";
import Search from "./search";

interface Props {
  allPosts: Post[];
}

export default function SideBar({ allPosts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}${searchParams.toString() ? "?" + searchParams : ""}`;

  const archives = useMemo(() => {
    const finalOptions: {
      value: string;
      display: string;
    }[] = [];
    let count = 1;

    allPosts.forEach((post, i) => {
      const date = parseISO(post.date);
      const value = `/archives/${date.getFullYear()}/${date.getMonth() + 1}/`;

      if (allPosts.length > i + 1) {
        // check the next item if there is still more in the list
        const nextDate = parseISO(allPosts[i + 1].date);
        const nextValue = `/archives/${nextDate.getFullYear()}/${
          nextDate.getMonth() + 1
        }/`;

        if (value === nextValue) {
          // if they are the same then increase the count
          count++;
        } else {
          // if they are different add the option and reset count
          finalOptions.push({
            display: `${format(date, "LLLL, yyyy")} (${count} ${
              count === 1 ? `post` : `posts`
            })`,
            value,
          });
          count = 1;
        }
      } else {
        // hit the end of the list to add the last item
        finalOptions.push({
          display: `${format(date, "LLLL, yyyy")} (${count} ${
            count === 1 ? `post` : `posts`
          })`,
          value,
        });
      }
    });
    return finalOptions;
  }, [allPosts]);

  return (
    <aside className="mt-4 lg:mt-0 lg:sticky lg:top-[3.8125rem] lg:col-span-1 lg:col-start-3 lg:h-[calc(100vh-2.75rem)] lg:self-start lg:overflow-y-auto lg:overflow-x-hidden">
      <GoogleAd slot="6930778589" adSpot="side-bar-1" />
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter">
        Search For Posts
      </h2>
      <Search key={`side-bar-search-${url}`} />
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter">
        Check out our Facebook
      </h2>
      <FacebookPageBlock key={`side-bar-fb-${url}`} />
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter">
        Subscribe
      </h2>
      <Link
        className="font-medium text-gray-900 underline"
        href="/feed.xml"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareRss} color="orange" /> Posts RSS Feed
      </Link>
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter">
        Recent Posts
      </h2>
      <MoreStories posts={allPosts.slice(0, 3)} hideHeader condensed />
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter">
        Archives
      </h2>
      <form
        className="mb-5"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="sr-only" htmlFor="archives-dropdown-2">
          Archives
        </label>
        <select
          id="archives-dropdown-2"
          name="archive-dropdown"
          className="mt-1 block min-w-fit rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring-3 focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => {
            if (e.currentTarget.value) {
              router.push(e.currentTarget.value);
            }
          }}
        >
          <option value="">Select Month</option>
          {archives.map((archive) => {
            return (
              <option key={archive.value} value={archive.value}>
                {archive.display}
              </option>
            );
          })}
        </select>
      </form>
      <GoogleAd slot="4304615245" adSpot="side-bar-2" />
    </aside>
  );
}
