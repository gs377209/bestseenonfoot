import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialIcons() {
  return (
    <ul className="flex min-w-full justify-evenly">
      <li>
        <a
          href="https://www.facebook.com/bestseenonfoot/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="#1877F2"
            className="rounded-lg bg-white"
            size="2xl"
            title="Best Seen On Foot Facebook"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/bestseenonfoot"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            color="#1DA1F2"
            className="rounded-lg bg-white"
            size="2xl"
            title="Best Seen On Foot Twitter"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/bestseenonfoot/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            color="#833AB4"
            className="rounded-lg bg-white"
            size="2xl"
            title="Best Seen On Foot Instagram"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/channel/UCpGnTSxYa1ubx4Exf1PQElw"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            color="#FF0000"
            className="rounded-lg bg-white"
            size="2xl"
            title="Best Seen On Foot Youtube"
          />
        </a>
      </li>
    </ul>
  );
}
