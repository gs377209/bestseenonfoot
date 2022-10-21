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
