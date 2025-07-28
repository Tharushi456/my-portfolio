import React, { useState } from "react";

const projects = [
  {
    title: "PetLife - Pet Healthcare Web App",
    description:
      "A comprehensive platform for pet owners to connect with veterinarians and care centers. Features include appointment booking, vaccination tracking, pet shop, and community forum for pet enthusiasts.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-purple-600 to-pink-600",
    icon: "🐾",
    year: "2024",
    period: "Sep 2024 – Present",
  },
  {
    title: "Book Store API (Java)",
    description:
      "Developed a RESTful Bookstore API using Java/JAX-RS with CRUD for books, authors, and customers, shopping cart, order system, Postman docs, and pure JAX-RS implementation.",
    tech: ["Java", "JAX-RS", "Postman"],
    gradient: "from-blue-600 to-cyan-600",
    icon: "📚",
    year: "2025",
    period: "Feb 2025 – Apr 2025",
  },
  {
    title: "Real-Time Ticketing System",
    description:
      "Built a ticket booking platform using Java (Spring Boot) and ReactJS with real-time processing using Producer-Consumer pattern, CLI version, and MongoDB for data handling.",
    tech: ["Java", "Spring Boot", "ReactJS", "MongoDB"],
    gradient: "from-green-600 to-lime-600",
    icon: "🎫",
    year: "2024",
    period: "Sep 2024 – Dec 2024",
  },
  {
    title: "Plane Ticket Booking System",
    description:
      "Created a console-based Java flight booking system with OOP, reservation and cancellation, and optimized search and seat availability handling.",
    tech: ["Java", "OOP"],
    gradient: "from-yellow-500 to-orange-500",
    icon: "✈️",
    year: "2024",
    period: "Feb 2024 – Mar 2024",
  },
  {
    title: "Student Grading System (Python)",
    description:
      "Built a Python app to automate grading with data validation, logic for grade calculation, and reporting — improving grading efficiency.",
    tech: ["Python"],
    gradient: "from-pink-500 to-red-500",
    icon: "🧮",
    year: "2023",
    period: "Nov 2023 – Dec 2023",
  },
  {
    title: "Pet Healthcare Management System",
    description:
      "PetLife full-stack app with React frontend and Node backend. Features health tracking, digital vaccination, Google Calendar integration, and secure auth.",
    tech: ["ReactJS", "NodeJS", "MongoDB"],
    gradient: "from-indigo-600 to-violet-600",
    icon: "🐶",
    year: "2024",
    period: "Sep 2024 – Present",
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden min-h-screen"
    >
      {/* Background Orbs */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-12 animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"
        style={{ animationDelay: "2000ms" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
        style={{ animationDelay: "4000ms" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight animate-pulse">
            Featured Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto animate-pulse" />
          <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {visibleProjects.map((project, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] shadow-2xl h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-purple-300 text-sm font-mono bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                        {project.year}
                      </span>
                      <p className="text-gray-400 text-xs mt-1">
                        {project.period}
                      </p>
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 text-purple-300 text-sm font-semibold rounded-full border border-slate-600 hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    <div className="flex items-center justify-center gap-2">
                      <span>View Project</span>
                      <span className="text-lg">🚀</span>
                    </div>
                  </button>
                  <button className="px-6 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                    <div className="flex items-center gap-2">
                      <span>GitHub</span>
                      <span className="text-lg">⚡</span>
                    </div>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-20">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
              <button
                onClick={() => setShowAll(true)}
                className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg">
                    View All Projects
                  </span>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform group-hover:rotate-90 transition-transform duration-300">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
