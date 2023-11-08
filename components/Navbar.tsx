"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  return (
    <nav className="bg-white dark:bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-between w-full items-center">
            <a className="flex-shrink-0" href="/">
              LOGO
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  onClick={() => setActiveItem("tea")}
                  className={`${
                    activeItem === "tea"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  } dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Convivendo com o Tea
                </a>
                <a
                  href="#"
                  onClick={() => setActiveItem("somos")}
                  className={`${
                    activeItem === "somos"
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  } dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Quem somos?
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-300 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block animate-fade-in-down" : "hidden"
            } md:hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-20">
              <a
                href="#"
                onClick={() => setActiveItem("tea")}
                className={`${
                  activeItem === "tea"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }
                mt-2 bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                Convivendo com o Tea
              </a>
              <a
                href="#"
                onClick={() => setActiveItem("somos")}
                className={`${
                  activeItem === "somos"
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                } bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                Quem somos?
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
