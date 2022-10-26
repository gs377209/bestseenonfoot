import Image from "next/future/image";
import Link from "next/link";
import SocialIcons from "./social-icons";

const Header = () => {
  return (
    <header
      className="flex h-[33vh] flex-col items-center justify-evenly bg-cover"
      style={{
        // backgroundImage: "url(/uploads/2019/05/PANO_20181207_122917.vr_.jpg)",
        backgroundImage: "url(/assets/blog/IMG_20181018_183801.jpg)",
      }}
    >
      <Link href="/">
        <a>
          <Image
            className="h-[25vh] w-[25vh] rounded-3xl"
            width="512"
            height="512"
            src="/assets/logo.jpg"
            alt="Best Seen On Foot Logo"
            title="Best Seen On Foot"
          />
        </a>
      </Link>

      <SocialIcons />
    </header>
  );
};

export default Header;
