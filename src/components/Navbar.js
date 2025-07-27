import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#4f2b3e]/90 backdrop-blur-lg text-[#faf5f8] fixed w-full z-50 shadow-md animate-fade-down duration-500 border-b border-[#bc749f]/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wide hover:tracking-wider transition-all duration-300 text-[#faf5f8]">
          My Portfolio
        </div>
        <div className="space-x-8 hidden md:flex text-base font-medium">
          <a
            href="#header"
            className="hover:text-[#bc749f] transition duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#bc749f] transition duration-300 hover:scale-105"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-[#bc749f] transition duration-300 hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#bc749f] transition duration-300 hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#bc749f] transition duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
