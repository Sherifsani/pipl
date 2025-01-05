/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > window.innerHeight && currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar when scrolling down after 100vh
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-sm transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="px-5 py-7 flex justify-between items-center max-w-[1400px] mx-auto">
        <Logo />
        <div className="menu-btn lg:hidden" onClick={toggleMenu}>
          <p className="text-[17px] cursor-pointer transition-all">
            {!isOpen ? "Menu" : "Close"}
          </p>
        </div>

        <div className="desktop-menu menu hidden lg:flex flex-row items-center">
          <ul className="flex">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#people">People & Design</a>
            </li>
            <li>
              <a href="#sustainability">Sustainability</a>
            </li>
            <li>
              <a href="#production">Production</a>
            </li>
            <li>
              <a href="#Product">Products & Customers</a>
            </li>
          </ul>
        </div>
        <div className="contact hidden lg:flex rounded-[100px] px-[20px] py-[14px] bg-black text-white hover:bg-accent hover:text-black transition-all">
          <a href="#contact" className="font-medium">
            Contact Us
          </a>
        </div>
      </nav>
      <div className={`mobile-menu flex-col ${isOpen ? "flex" : "hidden"}`}>
        <ul className="px-5">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#people">People & Design</a>
          </li>
          <li>
            <a href="#sustainability">Sustainability</a>
          </li>
          <li>
            <a href="#production">Production</a>
          </li>
          <li>
            <a href="#Product">Products & Customers</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="social flex px-3 mt-5 pb-5 items-center">
          <FaFacebook className="text-2xl mx-2" />
          <FaWhatsapp className="text-2xl mx-2" />
          <FaTwitter className="text-2xl mx-2" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
