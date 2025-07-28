import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
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
  );
}

export default App;
