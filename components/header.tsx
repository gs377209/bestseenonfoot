import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/future/image";

const Header = () => {
  return (
    <header>
      <section
        className="  bg-cover "
        style={{
          // backgroundImage: "url(/uploads/2019/05/PANO_20181207_122917.vr_.jpg)",
          backgroundImage: "url(/assets/blog/IMG_20181018_183801.jpg)",
        }}
      >
        <div className="mx-auto flex h-[50vh]  flex-col justify-around">
          <ul className="flex">
            <li className="mr-1">
              <a
                href="https://www.facebook.com/bestseenonfoot/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="mr-1">
              <a
                href="https://twitter.com/bestseenonfoot"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="mr-1">
              <a
                href="https://www.instagram.com/bestseenonfoot/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="mr-1">
              <a
                href="https://www.youtube.com/channel/UCpGnTSxYa1ubx4Exf1PQElw"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>

          <div className="mr-1 ">
            <a
              href="https://www.bestseenonfoot.com/"
              className="custom-logo-link"
              rel="home"
            >
              <Image
                className="h-[25vh] w-[25vh] rounded-3xl"
                width="512"
                height="512"
                src="/assets/logo.jpg"
                alt="Best Seen On Foot Logo"
                title="Best Seen On Foot Logo"
              />
            </a>
          </div>

          <form
            role="search"
            method="get"
            className="search-form"
            action="https://www.bestseenonfoot.com/"
          >
            <label>
              <span className="sr-only">Search for:</span>
              <input
                type="search"
                className="search-field"
                placeholder="Search"
                value=""
                name="s"
              />
            </label>
            <input type="submit" className="search-submit" value="Search" />
          </form>
        </div>
      </section>
    </header>
  );
};

export default Header;
