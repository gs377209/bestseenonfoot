"use client";

import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const updateShowState = () => {
      if (window.scrollY > 1600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", updateShowState);

    return () => {
      window.removeEventListener("scroll", updateShowState);
    };
  }, []);

  return showButton ? (
    <button
      onClick={() => {
        window.scrollTo({
          behavior: "smooth",
          top: 0,
        });
      }}
      className="prose md:prose-lg lg:prose-xl fixed z-90 bottom-8 left-8 border-0 w-12 h-12 rounded-full drop-shadow-md text-3xl font-bold bg-white"
      title="Scroll to Top"
    >
      <FontAwesomeIcon
        icon={faCircleChevronUp}
        className="w-12 h-12 rounded-full drop-shadow-md text-3xl font-bold"
      />
    </button>
  ) : null;
}
