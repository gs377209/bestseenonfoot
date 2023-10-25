"use client";

import { FACEBOOK_APP_ID } from "@/lib/constants";

const FacebookPageBlock = () => {
  return (
    <iframe
      className="fb-page mb-5 overflow-hidden border-none border-0"
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbestseenonfoot%2F&tabs&width=340&height=135&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&lazy=true&&appId=${FACEBOOK_APP_ID}`}
      width="340"
      height="135"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></iframe>
  );
};

export default FacebookPageBlock;
