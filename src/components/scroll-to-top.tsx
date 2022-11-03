import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }}
      className="prose md:prose-lg lg:prose-xl"
    >
      <FontAwesomeIcon icon={faCircleChevronUp} /> Scroll To Top
    </button>
  );
}
