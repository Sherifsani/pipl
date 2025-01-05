/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "./Logo";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <header>
      <nav className="px-5 py-7 flex justify-between items-center">
        <Logo />
        <div className="menu-btn" onClick={toggleMenu}>
          <p className="text-[17px] cursor-pointer">Menu</p>
        </div>
      </nav>
      {isOpen && (
        <div className="mobile-menu flex flex-col ">
          <ul className="px-5">
            <li>
              <a href="#services" className="">
                Services
              </a>
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
            <FaFacebook className="text-3xl mx-2" />
            <FaWhatsapp className="text-3xl mx-2" />
            <FaTwitter className="text-3xl mx-2" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
