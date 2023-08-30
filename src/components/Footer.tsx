import React from "react";
import SnoqualmiePassLogo from "./UI/SnoqualmieLogo";
import FacebookLogo from "./UI/FacebookLogo";
import NSPLogo from "./UI/NSPLogo";

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-xl mx-auto">
      <hr className="mx-auto border-gray-400 dark:border-gray-700" />
      <div className="flex items-center justify-between font-medium text-gray-600 dark:text-gray-400 p-5">
        <ul className="flex flex-wrap justify-between gap-3 items-center">
          <li>
            <SnoqualmiePassLogo />
          </li>
          <li>
            <NSPLogo />
          </li>
        </ul>
        <h1 className="hidden font-bold text-2xl sm:block">
          {new Date().getFullYear()} - SPVSP
        </h1>
        <div className="mx-2">
          <FacebookLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
