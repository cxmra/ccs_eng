import React, { useState } from "react";
import { Link } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logoImg from "../assets/CCSlogo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logoImg} alt="/" className=" w-10 h-10" />
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">
            CCS Engineering
          </h1>
          <ul className="hidden md:flex">
            <li className="cursor-pointer">
              <Link to="Home" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Services"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
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
