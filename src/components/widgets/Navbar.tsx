"use client";

import { useState } from "react";
import Link from "next/link";
import ToggleMenu from "@/src/components/atoms/ToggleMenu";
import { navbarData } from "@/src/shared/data";

const Navbar = () => {
  const links = navbarData.links;

  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in md:relative md:bg-white/90 md:backdrop-blur-sm">
      <div className="mx-auto w-full max-w-7xl px-3 py-3 md:flex md:justify-between md:px-4 md:py-3.5">
        <div className="flex justify-between">
          <Link className="flex flex-shrink-0 items-center" href="/">
            <span className="text-xl font-extrabold">
              サンドウマサル＆カンパニー
            </span>
          </Link>
          <div className="flex items-center md:hidden">
            <ToggleMenu
              handleToggleMenuOnClick={handleToggleMenuOnClick}
              isToggleMenuOpen={isToggleMenuOpen}
            />
          </div>
        </div>
        <nav
          className={`${
            isToggleMenuOpen ? "block" : "hidden"
          } h-screen w-auto justify-end overflow-y-auto md:mx-5 md:flex md:h-auto md:w-full md:items-center md:overflow-visible`}
          aria-label="Main navigation"
        >
          <ul className="flex w-full flex-col pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base">
            {links?.map(({ label, href }, index) => (
              <li key={`item-link-${index}`}>
                <Link
                  className="flex items-center px-4 py-3 font-medium transition duration-150 ease-in-out hover:text-gray-900"
                  href={href!}
                  onClick={() =>
                    isToggleMenuOpen ? handleToggleMenuOnClick() : null
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
