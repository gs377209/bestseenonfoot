"use client";

import { Post } from "@/interfaces/post";
import { GOOGLE_ADS_ID } from "@/lib/constants";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useMemo } from "react";
import MoreStories from "./more-stories";
import Search from "./search";

interface Props {
  allPosts: Post[];
}

export default function SideBar({ allPosts }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
    <aside className="lg:sticky lg:top-[3.8125rem] lg:col-span-1 lg:col-start-3 lg:h-[calc(100vh-2.75rem)] lg:self-start lg:overflow-y-auto lg:overflow-x-hidden">
      {/* <!-- Sidebar 1 --> */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
        key={`side-bar-1-g-script-${pathname}${searchParams}`}
      ></Script>
      <ins
        key={`side-bar-1-ins-${pathname}${searchParams}`}
        className="adsbygoogle block"
        data-ad-client={`${GOOGLE_ADS_ID}`}
        data-ad-slot="6930778589"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        key={`side-bar-1-script-${pathname}${searchParams}`}
        id="sidebar-ad-1"
        strategy="lazyOnload"
      >
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Search For Posts
      </h2>
      <Search key={`side-bar-search-${pathname}${searchParams}`} />
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Check out our Facebook
      </h2>
      <div
        key={`side-bar-fb-${pathname}${searchParams}`}
        className="fb-page mb-5"
        data-href="https://www.facebook.com/bestseenonfoot/"
        data-tabs=""
        data-width="300"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
      >
        <blockquote
          cite="https://www.facebook.com/bestseenonfoot/"
          className="fb-xfbml-parse-ignore"
        >
          <Link href="https://www.facebook.com/bestseenonfoot/">
            Best Seen On Foot
          </Link>
        </blockquote>
      </div>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Subscribe
      </h2>
      <Link
        className="font-medium text-gray-900 underline"
        href="/feed.xml"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareRss} color="orange" /> Posts RSS Feed
      </Link>
      <h2 className="mb-8 mt-5 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Recent Posts
      </h2>
      <MoreStories posts={allPosts.slice(0, 3)} hideHeader condensed />
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
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
          className="mt-1 block min-w-fit rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
      {/* <!-- Sidebar 2 --> */}
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
        key={`side-bar-2-g-script-${pathname}${searchParams}`}
      ></Script>
      <ins
        key={`side-bar-2-ins-${pathname}${searchParams}`}
        className="adsbygoogle block"
        data-ad-client={`${GOOGLE_ADS_ID}`}
        data-ad-slot="4304615245"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        key={`side-bar-2-script-${pathname}${searchParams}`}
        id="sidebar-ad-2"
        strategy="lazyOnload"
      >
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </aside>
  );
}
