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
    <main className="relative font-sans bg-gradient-to-br from-[#050205] via-[#3a1d2a] to-[#501f3a] text-[#faf5f8] overflow-x-hidden scroll-smooth">
      {/* Decorative Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#7a4c6d] opacity-15 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#6b3a57] opacity-8 rounded-full blur-2xl animate-spin-slow z-0" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#a67b92] opacity-8 rounded-full blur-2xl animate-float z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Header />
        <section id="about" className="px-6 md:px-16 lg:px-24">
          <AboutMe />
        </section>
        <section id="skills" className="px-6 md:px-16 lg:px-24">
          <Skills />
        </section>
        <section id="projects" className="px-6 md:px-16 lg:px-24">
          <Projects />
        </section>
        <section id="contact" className="px-6 md:px-16 lg:px-24">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default App;
