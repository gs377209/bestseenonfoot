import React, { Suspense } from "react";
import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";
import ScrollToTop from "./scroll-to-top";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <nav className="animate-pulse sticky top-0 z-10 mb-5 min-h-[3rem] bg-emerald-400 p-5"></nav>
        }
      >
        <Nav />
      </Suspense>
      {/* Top of page */}
      {/*
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADS_ID}`}
        crossOrigin="anonymous"
        strategy="lazyOnload"
        key={`top-of-page-g-script-${pathname}${searchParams}`}
        onReady={() => {
          // @ts-expect-error
          // eslint-disable-next-line no-undef
          (adsbygoogle = window.adsbygoogle || []).push({});
        }}
      ></Script>
      <ins
        key={`top-of-page-ins-${pathname}${searchParams}`}
        className="adsbygoogle block"
        data-ad-client={`${GOOGLE_ADS_ID}`}
        data-ad-slot="7920604231"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins> */}
      <Suspense
        fallback={<div className="animate-pulse container mx-auto p-5"></div>}
      >
        <Breadcrumbs />
      </Suspense>
      <div className="min-h-screen">
        <main>
          {children}
          <ScrollToTop />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
