"use client";

import { useState, useEffect } from "react";
import navLogo from "@/public/assets/images/navLogo.svg";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import NavbarLink from "@/components/navbarLink/NavbarLink";
import { NavbarLinks } from "@/constent/Constent";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="text-white">
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 2xl:px-7 h-16 sm:h-20 2xl:h-24">
        <Image
          src={navLogo}
          alt="logo"
          className="w-24 lg:w-[258px] 2xl:w-40"
          width={0}
          height={0}
          priority
        />

        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-3/4 sm:w-2/4 h-full bg-black text-white p-5 transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:w-auto md:bg-transparent md:p-0 md:h-auto md:items-center md:gap-8`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
            {NavbarLinks.map((link) => (
              <NavbarLink
                key={link.href}
                href={link.href}
                text={link.text}
                onClick={closeMenu}
              />
            ))}
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
