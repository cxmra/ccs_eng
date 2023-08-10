import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "../LinkedinIcon.css";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-slate-900 text-gray-300 py-2 px-2">
      <div className="pl-10 md:pl-0 m-auto text-gray-500">
        <p className="py-4 text-sm">CCS Engineering Inc.</p>
      </div>
      <div className="md:hidden text-2xl">
        <a
          href="https://www.linkedin.com/in/jim-anderson-1153524/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="my-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
