import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);

        // Calculate visibility based on scroll position
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        const elementPosition = rect.top;

        if (elementPosition < windowHeight - elementVisible) {
          setIsVisible(true);
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="header"
      ref={headerRef}
      className="w-full text-[#faf5f8] pt-32 pb-20 px-6 md:px-16 lg:px-24 min-h-screen flex items-center relative z-10 overflow-hidden"
      style={{
        transform: `translateY(${Math.min(scrollY * 0.1, 50)}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Animated background elements */}
      <div
        className="absolute top-1/4 left-1/4 w-60 h-60 bg-[#bc749f] rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 relative z-10">
        {/* Left image section */}
        <div
          className="md:w-1/2 flex justify-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-8 border-[#bc749f] shadow-2xl group hover:shadow-[0_0_30px_rgba(188,116,159,0.5)] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bc749f]/20 to-[#a45383]/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>

            <img
              src={process.env.PUBLIC_URL + "/pic2.jpg"}
              alt="Tharushi"
              className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500 ease-out relative z-10 rounded-full"
              style={{
                filter: isVisible ? "grayscale(0%)" : "grayscale(50%)",
                transition: "filter 1s ease-out 0.3s",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#bc749f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>

            <div className="absolute -inset-2 bg-gradient-to-r from-[#bc749f] via-[#a45383] to-[#bc749f] rounded-full opacity-0 group-hover:opacity-30 blur-sm animate-pulse transition-opacity duration-300"></div>

            {/* Floating animation when visible */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: isVisible
                  ? "0 5px 15px rgba(188, 116, 159, 0.4)"
                  : "none",
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition:
                  "box-shadow 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
              }}
            ></div>
          </div>
        </div>

        {/* Right content */}
        <div
          className="md:w-1/2 flex flex-col justify-center space-y-4"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(50px)",
            transition:
              "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-medium text-[#bc749f]"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.6s ease-out 0.4s",
            }}
          >
            Hi,
          </h2>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight text-[#faf5f8]"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.6s ease-out 0.5s",
            }}
          >
            I'm Tharushi Cooray
          </h1>
          <p
            className="text-lg md:text-xl text-[#f5e9ef] max-w-xl"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.6s ease-out 0.6s",
            }}
          >
            A passionate Computer Science undergraduate
          </p>
          <div
            className="flex justify-center md:justify-start mt-6"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "transform 0.6s ease-out 0.7s",
            }}
          >
            <a
              href="#contact"
              className="relative overflow-hidden bg-[#a45383] hover:bg-[#bc749f] text-white px-8 py-4 rounded-full shadow-lg font-semibold text-lg transition duration-300 group"
              style={{
                boxShadow: isVisible
                  ? "0 5px 15px rgba(164, 83, 131, 0.4)"
                  : "none",
                transition:
                  "box-shadow 0.5s ease-out 0.8s, background-color 0.3s ease-out",
              }}
            >
              <span className="relative z-10">Let's Connect</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#bc749f] to-[#a45383] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
