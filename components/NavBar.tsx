"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white  ${
        scrolled ? " bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`flex justify-between ${
          menuOpen ? "bg-primary" : "bg-transparent"
        } items-center px-4 py-4 md:px-6 lg:px-8`}
      >
        <Link href="/" className=" text-lg sm:text-xl md:text-2xl text-center flex relative">
        <div className=" border-t-2 border-l-2 px-1 w-4 h-4 self-start absolute -left-1.5 sm:-left-2"></div>
           <span className=" font-medium tracking-widest sm:my-0.5">TBS</span>
        <div className=" border-r-2 border-b-2 px-1 w-4 h-4 self-end absolute -right-1.5 sm:-right-2"></div>
        </Link>

        <div className="md:hidden flex justify-center items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-base lg:text-lg">
            <li>
              <Link href="/" className={`${scrolled ? "hover:border-b-2" : "hover:text-primary"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${scrolled ? "hover:border-b-2" : "hover:text-primary"}`}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`${scrolled ? "hover:border-b-2" : "hover:text-primary"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div
          className={`md:hidden bg-primary text-center px-4 md:px-6 lg:px-8 py-4`}
        >
          <ul className="flex flex-col w-full gap-5 text-base lg:text-lg">
            <li className=" border-b-2 m-0">
              <Link href="/" className="hover:text-primary mb-2">
                Home
              </Link>
            </li>
            <li className=" border-b-2 m-0">
              <Link href="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li className=" border-b-2 m-0">
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
