import glacier from "@/assets/PANO_20181207_122917.jpg";
import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./social-icons";

const Header = () => {
  return (
    <header className="flex h-[33vh] flex-col items-center justify-evenly">
      <div className="absolute -z-10 h-[33vh] w-[100vw] overflow-hidden">
        <Image
          alt="Glacier"
          src={glacier}
          placeholder="blur"
          className="object-cover"
          priority
          fill
          sizes="100vw"
          quality={100}
          onError={(e) => console.error(e)}
        />
      </div>
      <Link href="/">
        <Image
          className="h-[25vh] w-[25vh] rounded-3xl"
          width="512"
          height="512"
          src={logo}
          alt="Best Seen On Foot Logo"
          title="Best Seen On Foot"
          priority
          placeholder="blur"
          onError={(e) => console.error(e)}
        />
      </Link>

      <SocialIcons />
    </header>
  );
};

export default Header;
