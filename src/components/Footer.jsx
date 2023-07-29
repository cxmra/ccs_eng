import React from "react";
import "../LinkedinIcon.css";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 py-2 px-2">
      <div className="flex flex-col max-w-[1240px] m-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4 text-sm">CCS Engineering</p>
        <div className="flex justify-between sm:w-[300px] pl-16 pt-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/jim-anderson-1153524/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="my-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
