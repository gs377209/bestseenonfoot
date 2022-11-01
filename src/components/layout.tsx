import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Nav from "./nav";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <Nav />
      {/* <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
        crossOrigin="anonymous"
      ></Script> */}
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
      </div>
      <Footer />
    </>
  );
};

export default Layout;
