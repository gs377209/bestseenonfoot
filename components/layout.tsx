import Script from "next/script";
import Breadcrumbs from "./breadcrumbs";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import Nav from "./nav";
import SideBar from "./side-bar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <Nav />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1408526493984577"
        crossOrigin="anonymous"
      ></Script>
      {/* Top of page */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1408526493984577"
        data-ad-slot="7920604231"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="top of page ad">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>
      <Breadcrumbs />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <SideBar />
      <Footer />
    </>
  );
};

export default Layout;
