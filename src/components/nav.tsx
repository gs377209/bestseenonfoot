import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import cn from "classnames";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Nav() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <nav className="sticky top-0 z-10 mb-5 min-h-[3rem] bg-emerald-400 p-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between md:justify-center ">
        <div className="flex md:order-2">
          <button
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
            type="button"
            className="inline-flex items-center justify-center rounded-lg text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 md:hidden"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={cn(
            "w-full items-center justify-between md:order-1 md:flex md:w-auto",
            { hidden: !isMobileMenuVisible }
          )}
          id="mobile-menu-3"
        >
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link href="/">
                <a className="block border-b border-gray-100 py-2 pl-3 pr-4 text-black hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/where-weve-been/">
                <a className="block border-b border-gray-100 py-2 pl-3 pr-4 text-black hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                  Where We&apos;ve Been
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about-us/">
                <a className="block border-b border-gray-100 py-2 pl-3 pr-4 text-black hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us/">
                <a className="block border-b border-gray-100 py-2 pl-3 pr-4 text-black hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                  Contact Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/">
                <a className="block border-b border-gray-100 py-2 pl-3 pr-4 text-black hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700">
                  Privacy Policy
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
