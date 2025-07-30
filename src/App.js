import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrollLoading, setIsScrollLoading] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time for components and assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let scrollTimeout;
    
    const handleScroll = () => {
      // Show scroll loading effect
      setIsScrollLoading(true);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Hide scroll loading after scroll stops
      scrollTimeout = setTimeout(() => {
        setIsScrollLoading(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* Initial Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center z-50">
          {/* Loading Animation */}
          <div className="text-center">
            {/* Spinning loader */}
            <div className="relative mb-8">
              <div className="w-16 h-16 border-4 border-purple-300 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-pink-300 border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Loading text */}
            <div className="text-white text-xl font-semibold mb-4">Loading Portfolio</div>
            
            {/* Loading dots animation */}
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-40">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Scroll Loading Indicator */}
      {isScrollLoading && (
        <div className="fixed top-4 right-4 z-40">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-3 border border-purple-500/30">
            <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      <main className="relative font-sans bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-x-hidden scroll-smooth">
      {/* Enhanced Decorative Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse z-0" />
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse z-0"
        style={{ animationDelay: "1000ms" }}
      />
      <div
        className="absolute bottom-32 left-1/3 w-80 h-80 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse z-0"
        style={{ animationDelay: "2000ms" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse z-0"
        style={{ animationDelay: "3000ms" }}
      />
      <div
        className="absolute bottom-1/4 left-10 w-56 h-56 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse z-0"
        style={{ animationDelay: "4000ms" }}
      />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
    </>
  );
}

export default App;