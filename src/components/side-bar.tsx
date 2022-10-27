import { format, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MoreStories from "./more-stories";
import PostType from "../interfaces/post";
import Script from "next/script";
import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";
import { useRouter } from "next/router";

type Props = {
  allPosts: PostType[];
};

export default function SideBar({ allPosts }: Props) {
  const router = useRouter();

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
    <aside className="lg:sticky lg:bottom-5  lg:col-span-1 lg:col-start-3 lg:self-end">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1408526493984577"
        crossOrigin="anonymous"
      ></Script>
      {/* <!-- Sidebar 1 --> */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1408526493984577"
        data-ad-slot="6930778589"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="sidebar-ad-1" strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
      {/* TODO: Insta Feed <h2>The Insta!</h2>
      <Script
        id="insta-feed"
        strategy="lazyOnload"
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=867560113588361&autoLogAppEvents=1"
        nonce="1RU6xNzb"
        onLoad={() => {
          window.FB.api(
            "/instagram_oembed?url=https://www.instagram.com/p/CRiDbNusQD4/",
            function (response) {
              if (response && !response.error) {
                console.log(response);
              } else {
                console.log(response.error);
              }
            }
          );
        }}
      ></Script> */}
      <h2 className="mt-5 mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Check out our Facebook
      </h2>
      <div
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
          <a href="https://www.facebook.com/bestseenonfoot/">
            Best Seen On Foot
          </a>
        </blockquote>
      </div>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
        Subscribe
      </h2>
      <a
        className="font-mdeium text-gray-900 underline"
        href="/rss/feed.xml"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareRss} color="orange" /> Posts RSS Feed
      </a>
      <h2 className="mt-5 mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1408526493984577"
        crossOrigin="anonymous"
      ></Script>
      {/* <!-- Sidebar 2 --> */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1408526493984577"
        data-ad-slot="4304615245"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="sidebar-ad-2" strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </aside>
  );
}
