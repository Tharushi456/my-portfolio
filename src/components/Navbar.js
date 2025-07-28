import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ["header", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const navItems = [
    { href: "#header", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl  py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="relative group">
          <div className="text-3xl font-black tracking-wide text-white group-hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full group ${
                activeSection === item.href.substring(1)
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Active indicator */}
              {activeSection === item.href.substring(1) && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 to-pink-800/40 rounded-full border border-purple-600/20 backdrop-blur-sm"></div>
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/15 to-pink-800/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative z-10">{item.label}</span>

              {/* Underline effect */}
              <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></div>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced backdrop blur effect */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-purple-950/60 to-slate-950/60 -z-10"></div>
      )}
    </nav>
  );
};

export default Navbar;
