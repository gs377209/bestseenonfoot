import React, { Suspense } from "react";
import GoogleAd from "./GoogleAd";
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
      <Suspense fallback={<></>}>
        <GoogleAd slot="7920604231" adSpot="top-of-page" />
      </Suspense>
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
