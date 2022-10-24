import { faSquareRss } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Script from "next/script";
import PostType from "../interfaces/post";
import MoreStories from "./more-stories";

type Props = {
  posts: PostType[];
};

export default function SideBar() {
  const router = useRouter();

  return (
    <aside>
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
      <Script id="sidebar ad 1">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
      <h2>The Insta!</h2>
      <Script id="insta-feed">
        {`if (window.FB) {
          FB.api(
            "/instagram_oembed",
            function (response) {
              if (response && !response.error) {
                /* handle the result */
              }
            }
          );
        }`}
      </Script>
      <h2>Checkout our Facebook!</h2>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/bestseenonfoot/"
        data-tabs=""
        data-width=""
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
      <h2>Subscribe!</h2>
      <a
        className="text-blue-500 underline"
        href="/rss/feed.xml"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSquareRss} color="orange" /> - RSS
      </a>
      <h2>Archives!</h2>
      <form
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
          onChange={(e) => {
            if (e.currentTarget.value) {
              router.push(e.currentTarget.value);
            }
          }}
        >
          <option value="">Select Month</option>
          <option value="https://www.bestseenonfoot.com/2020/06/">
            {" "}
            June 2020 &nbsp;(1)
          </option>
          <option value="https://www.bestseenonfoot.com/2020/05/">
            {" "}
            May 2020 &nbsp;(3)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/08/">
            {" "}
            August 2019 &nbsp;(2)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/06/">
            {" "}
            June 2019 &nbsp;(1)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/05/">
            {" "}
            May 2019 &nbsp;(2)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/03/">
            {" "}
            March 2019 &nbsp;(13)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/02/">
            {" "}
            February 2019 &nbsp;(5)
          </option>
          <option value="https://www.bestseenonfoot.com/2019/01/">
            {" "}
            January 2019 &nbsp;(8)
          </option>
          <option value="https://www.bestseenonfoot.com/2018/12/">
            {" "}
            December 2018 &nbsp;(5)
          </option>
          <option value="https://www.bestseenonfoot.com/2018/11/">
            {" "}
            November 2018 &nbsp;(4)
          </option>
          <option value="https://www.bestseenonfoot.com/2018/10/">
            {" "}
            October 2018 &nbsp;(4)
          </option>
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
      <Script id="sidebar ad 2">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </aside>
  );
}
