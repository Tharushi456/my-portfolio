import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="h-screen w-full bg-gradient-to-br from-[#0d070a] via-[#4f2b3e] to-[#703455] text-[#faf5f8] flex items-center px-6 md:px-16 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-10">
        {/* Left content */}
        <div className="md:w-1/2 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#bc749f]">
            Hi, I’m Tharushi 👩‍💻
          </h1>
          <p className="text-lg md:text-xl text-[#f5e9ef] mb-6 max-w-xl">
            A passionate Computer Science undergraduate from the University of
            Westminster seeking an internship opportunity to apply and grow my
            skills.
          </p>
          <a
            href="#contact"
            className="bg-[#a45383] hover:bg-[#bc749f] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            Let’s Connect
          </a>
        </div>

        {/* Right image section */}
        <div className="md:w-1/2 flex justify-center animate-fade-in-right">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[#bc749f] shadow-xl">
            <img
              src="/pic2.jpg"
              alt="Tharushi"
              className="object-cover w-full h-full hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
