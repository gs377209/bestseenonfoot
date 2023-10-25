"use client";

import { FACEBOOK_APP_ID } from "@/lib/constants";

const FacebookPageBlock = () => {
  return (
    // prefer this, but does not work on route change
    // <div
    //   className="fb-page mb-5"
    //   data-href="https://www.facebook.com/bestseenonfoot/"
    //   data-tabs=""
    //   data-width="500"
    //   data-height="500"
    //   data-small-header="false"
    //   data-adapt-container-width="true"
    //   data-hide-cover="false"
    //   data-show-facepile="true"
    //   data-lazy="true"
    // >
    //   <blockquote
    //     cite="https://www.facebook.com/bestseenonfoot/"
    //     className="fb-xfbml-parse-ignore"
    //   >
    //     <a href="https://www.facebook.com/bestseenonfoot/">Best Seen On Foot</a>
    //   </blockquote>
    // </div>
    <iframe
      className="fb-page mb-5 overflow-hidden border-none border-0"
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbestseenonfoot%2F&tabs&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&lazy=true&&appId=${FACEBOOK_APP_ID}`}
      width="500"
      height="500"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default FacebookPageBlock;
