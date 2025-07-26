import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative font-sans bg-gradient-to-br from-[#0d070a] via-[#4f2b3e] to-[#703455] text-[#faf5f8] overflow-x-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#bc749f] opacity-20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#a45383] opacity-10 rounded-full blur-2xl animate-spin-slow z-0" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#d4a5c0] opacity-10 rounded-full blur-2xl animate-float z-0" />

      {/* Content Layers */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
