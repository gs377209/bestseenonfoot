import React from "react";
import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Nav from "./nav";
import ScrollToTop from "./scroll-to-top";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <Nav />
      {/* Top of page */}
      {/* <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={`${GOOGLE_ADS_ID}`}
        data-ad-slot="7920604231"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="top-of-page-ad" strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script> */}
      <Breadcrumbs />
      <div className="min-h-screen">
        <main>{children}</main>
        <div className="container mx-auto my-5 px-5">
          <ScrollToTop />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
