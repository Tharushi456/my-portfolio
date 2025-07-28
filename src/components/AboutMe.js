import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    "Python",
    "Java",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "SQL",
    "PHP",
    "Linux",
  ];

  const educationData = [
    {
      id: 1,
      period: "2009 - 2023",
      institution: "Loyola College, Negombo",
      degree: "Primary & Secondary Education",
      icon: "🎓",
    },
    {
      id: 2,
      period: "2023 - Present",
      institution: "University of Westminster",
      degree: "BSc Computer Science Undergraduate",
      icon: "🎯",
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development Bootcamp",
      provider: "Codecademy",
      year: "2024",
      color: "from-purple-700 to-pink-700",
    },
    {
      name: "Java Programming Certification",
      provider: "Coursera",
      year: "2023",
      color: "from-blue-700 to-cyan-700",
    },
    {
      name: "Linux Essentials",
      provider: "Linux Foundation",
      year: "2022",
      color: "from-green-700 to-teal-700",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Mouse Follower Effect */}
      <div
        className="absolute pointer-events-none z-0 opacity-20"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(40px)",
          transition: "all 0.1s ease-out",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/50 backdrop-blur-lg rounded-full p-2 border border-white/5">
            {["about", "education", "skills", "certifications"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium ${
                    activeSection === section
                      ? "bg-gradient-to-r from-purple-700 to-pink-700 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>

        {/* About Section */}
        {activeSection === "about" && (
          <div
            className={`transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-purple-500 bg-clip-text text-transparent mb-6 leading-tight">
                About Me
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-950/60 to-pink-950/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Current Status
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Second-year{" "}
                    <span className="font-semibold text-purple-300">
                      Computer Science undergraduate
                    </span>{" "}
                    at the University of Westminster
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-950/60 to-purple-950/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Mission
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Exploring new technologies and creating real-world
                    applications that solve practical problems
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-black/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I love collaborating in diverse teams and continuously
                  learning new skills to keep pace with the fast-changing tech
                  world. I'm seeking a dynamic internship where I can grow my
                  skills and contribute to impactful projects that make a
                  difference.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative bg-gradient-to-br from-purple-950/40 to-pink-950/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-purple-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-700/15"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-700 to-pink-700 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold">
                      {skill.charAt(0)}
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                      {skill}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-800/5 to-pink-800/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16">
              Education Journey
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-purple-950/60 to-pink-950/60 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{item.icon}</span>
                        <span className="text-purple-300 font-mono text-sm bg-purple-950/60 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.institution}
                      </h4>
                      <p className="text-gray-300">{item.degree}</p>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-950"></div>
                    {index < educationData.length - 1 && (
                      <div className="absolute top-6 left-1/2 w-0.5 h-16 bg-gradient-to-b from-purple-600 to-pink-600 transform -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16">
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-t-2xl`}
                  ></div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${cert.color}`}
                    ></div>
                    <span className="text-gray-400 text-sm font-mono">
                      {cert.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{cert.provider}</p>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
