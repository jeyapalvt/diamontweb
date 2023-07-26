import React from "react";
import logo from "../assets/images/logo.png";
import b2b from "../assets/images/b2b.png";
const Footer = () => {
  return (
    <footer className="mt-10 mb-0 bg-white dark:bg-gray-900">
      <div className="w-full p-5 px-10 mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={b2b} className="h-8 mr-3" alt="Diamond Logo" />

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Diamond llc
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
