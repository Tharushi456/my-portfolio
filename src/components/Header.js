import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="w-full text-[#faf5f8] pt-32 pb-20 px-6 md:px-16 lg:px-24 min-h-screen flex items-center relative z-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 relative z-10">
        {/* Left image section */}
        <div className="md:w-1/2 flex justify-center animate-fade-in-left">
          <div className="relative w-96 h-96 rounded-full overflow-hidden border-8 border-[#bc749f] shadow-2xl">
            <img
              src="/pic2.jpg"
              alt="Tharushi"
              className="object-cover w-full h-full hover:scale-110 transition duration-700"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="md:w-1/2 animate-fade-in-right flex flex-col justify-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-medium text-[#bc749f]">
            Hi,
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#faf5f8]">
            I'm Tharushi Cooray
          </h1>
          <p className="text-lg md:text-xl text-[#f5e9ef] max-w-xl">
            A passionate Computer Science undergraduate
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <a
              href="#contact"
              className="bg-[#a45383] hover:bg-[#bc749f] text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
