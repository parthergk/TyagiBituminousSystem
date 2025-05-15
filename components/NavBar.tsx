"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
      <div className={`flex justify-between ${menuOpen ? 'bg-primary': 'bg-transparent'} items-center px-4 py-3 md:px-6 lg:px-8 md:py-4`}>
        <a href="/" className="text-xl font-bold">
          Logo
        </a>

        <div className="md:hidden flex justify-center items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ?<X/> : <Menu/>}
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-base lg:text-lg ">
            <li ><a href="#" className="hover:text-primary">Home</a></li>
            <li ><a href="#" className="hover:text-primary">About Us</a></li>
            <li ><a href="#" className="hover:text-primary">Products</a></li>
            <li ><a href="#" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <div className={`md:hidden bg-primary text-center px-4 md:px-6 lg:px-8 py-4`}>
          <ul className="flex flex-col space-y-6 text-base lg:text-lg font-medium">
            <li className="border-b-2"><a href="#" className="hover:text-primary text-start ">Home</a></li>
            <li className="border-b-2"><a href="#" className="hover:text-primary text-start ">About</a></li>
            <li className="border-b-2"><a href="#" className="hover:text-primary text-start ">Products</a></li>
            <li className="border-b-2"><a href="#" className="hover:text-primary text-start ">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
