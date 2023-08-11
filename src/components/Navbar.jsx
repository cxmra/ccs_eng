import React, { useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logoImg from "../assets/TransparentCCSLogo.png";
import { FaLinkedin } from "react-icons/fa";
import "../LinkedinIcon.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className="bg-white w-screen h-[80px] z-10 fixed drop-shadow-xl">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logoImg} alt="/" className=" w-10 h-10" />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            CCS Engineering
          </h1>
          <ul className="hidden md:flex font-bold">
            <Link to="Home" spy={true} smooth={true} duration={500}>
              <li className="rounded-2xl cursor-pointer transition duration-100 ease-in-out hover:bg-zinc-200">
                Home
              </li>
            </Link>
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              <li className="rounded-2xl cursor-pointer transition duration-100 ease-in-out hover:bg-zinc-200">
                Services
              </li>
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <li className="rounded-2xl cursor-pointer transition duration-100 ease-in-out hover:bg-zinc-200">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="hidden md:block mr-8 text-2xl bg-white">
          <a
            href="https://www.linkedin.com/in/jim-anderson-1153524/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="my-icon" />
          </a>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={!nav ? "hidden" : "font-bold absolute bg-white w-full px-8"}
      >
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            onClick={handleClose}
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            onClick={handleClose}
            to="Services"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full cursor-pointer">
          <Link
            onClick={handleClose}
            to="Contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
