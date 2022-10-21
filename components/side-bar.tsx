import Script from "next/script";

export default function SideBar() {
  return (
    <Script id="instagram-feed">{`FB.api(
    "/instagram_oembed",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);`}</Script>
  );
}
