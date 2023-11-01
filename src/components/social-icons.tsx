import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <ul className="flex min-w-full justify-evenly">
      <li>
        <Link
          href="https://www.facebook.com/bestseenonfoot/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Best Seen On Foot Facebook"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="#1877F2"
            className="rounded-lg bg-white"
            size="2xl"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://twitter.com/bestseenonfoot"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Best Seen On Foot Twitter"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="#1DA1F2"
            className="rounded-lg bg-white"
            size="2xl"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/bestseenonfoot/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Best Seen On Foot Instagram"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color="#833AB4"
            className="rounded-lg bg-white"
            size="2xl"
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.youtube.com/@bestseenonfoot5516"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Best Seen On Foot Youtube"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            color="#FF0000"
            className="rounded-lg bg-white"
            size="2xl"
          />
        </Link>
      </li>
    </ul>
  );
}
