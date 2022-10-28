import Image from "next/future/image";
import Link from "next/link";
import SocialIcons from "./social-icons";

const Header = () => {
  return (
    <header
      className="flex h-[33vh] flex-col items-center justify-evenly bg-cover"
      style={{
        backgroundImage: "url(/assets/PANO_20181207_122917.vr_.jpg)",
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
