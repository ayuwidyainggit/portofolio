import React, { useState } from "react";
import Jumbotron from "./Jumbotron";
import Abooutme from "./Abooutme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#10173E] p-4 fixed top-0 left-0 w-full">
      <div className="container mx-auto grid grid-cols-12 ">
        <div className="col-span-9 text-[#D5D6DA] font-bold text-xl text-Poppins">
          My Website
        </div>

        {/* Burger Button for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-[#D5D6DA] p-2 focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 100 2h12a1 1 0 100-2H4z"
              />
            </svg>
          </button>
        </div>

        {/* Links for Large Screens */}
        <div className="col-span-3 hidden lg:flex space-x-4  justify-between">
          <a
            href="#"
            className="text-[#D5D6DA] font-extrabold hover:text-blue-200 text-poppins hover:border-b-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#D5D6DA] font-extrabold hover:text-blue-200 text-poppins hover:border-b-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-[#D5D6DA] font-extrabold hover:text-blue-200 text-poppins hover:border-b-2"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-[#D5D6DA] font-extrabold hover:text-blue-200 text-poppins hover:border-b-2"
          >
            Projects
          </a>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="bg-blue-500 grid  p-4 space-y-4  ">
            <a href="#" className="text-[#D5D6DA] hover:text-blue-200">
              Home
            </a>
            <a href="#" className="text-[#D5D6DA] hover:text-blue-200">
              About
            </a>
            <a href="#" className="text-[#D5D6DA] hover:text-blue-200">
              Skills
            </a>
            <a href="#" className="text-[#D5D6DA] hover:text-blue-200">
              Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
