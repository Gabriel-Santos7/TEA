"use client";
import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border border-gray-300 rounded-md mb-4 bg-[#f4f4f4] ${
        isOpen ? "bg-white" : ""
      }`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2
          className={`text-lg font-medium ${
            isOpen ? "text-blue-600" : "text-black"
          }`}
        >
          {title}
        </h2>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? "rotate-90" : "rotate-0"
          } ${isOpen ? "rotate-90 text-blue-600" : "rotate-0 text-black"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M12 5l7 7-7 7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </div>
      <div
        className={`ease-in-out duration-300 ${
          isOpen && "p-4"
        } transition-max-h max-h-0 overflow-hidden ${
          isOpen ? "max-h-full" : ""
        }`}
      >
        <p
          className={`text-gray-700 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
