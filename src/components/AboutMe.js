import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skillCategories = {
    "Frontend & UI Technologies": ["HTML", "CSS", "React"],
    "Programming Languages": ["Python", "Java", "JavaScript", "PHP"],
    "Backend & Runtime": ["Node.js"],
    Databases: ["MongoDB", "SQL"],
    "Tools & OS": ["Linux"],
  };

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
      name: "SQL (Intermediate)",
      provider: "HackerRank",
      year: "Jul 2025",
      credentialId: "A34B1E16A841",
      pdf: process.env.PUBLIC_URL + "/certificates/sql-intermediate.png",
      color: "from-purple-700 to-indigo-700",
    },
    {
      name: "Spring Boot 2.0 Essential Training",
      provider: "LinkedIn Learning",
      year: "Nov 2024",
      credentialId: null,
      pdf: process.env.PUBLIC_URL + "/certificates/spring-boot-training.png",
      color: "from-pink-700 to-rose-700",
    },
    {
      name: "Python (Basic)",
      provider: "HackerRank",
      year: "Sep 2024",
      credentialId: "3E846A5F166D",
      pdf: process.env.PUBLIC_URL + "/certificates/python-basic.png",
      color: "from-yellow-700 to-orange-700",
    },
    {
      name: "Python for Beginners",
      provider: "University of Moratuwa",
      year: "Jun 2023",
      credentialId: "QEPmsAu9KC",
      pdf: process.env.PUBLIC_URL + "/certificates/python-for-beginners.pdf",
      color: "from-blue-800 to-teal-800",
    },
  ];

  // Loading component
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
        {/* Animated background orbs during loading */}
        <div className="absolute top-40 left-20 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2000ms" }}
        />

        <div className="text-center z-10">
          {/* loading spinner */}
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-purple-700/30 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
            <div
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-pink-600 rounded-full animate-spin mx-auto"
              style={{
                animationDirection: "reverse",
                animationDuration: "1.5s",
              }}
            ></div>
          </div>

          {/* Loading text  */}
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
            Loading...
          </div>

          {/* Loading dots animation */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Background animated orbs */}
      <div className="absolute top-40 left-20 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
        style={{ animationDelay: "1500ms" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-8 animate-pulse"
        style={{ animationDelay: "3000ms" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16 mt-8 px-4">
          <div className="bg-black/50 backdrop-blur-lg rounded-full p-2 border border-white/5 flex flex-wrap gap-2 justify-center">
            {["about", "education", "skills", "certifications"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-5 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full transition-all duration-300 capitalize font-medium ${
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
              <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16 mt-8">
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
                    Third-year{" "}
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
                  I am a dedicated software developer with a strong vision to
                  deliver impactful and user-centric digital solutions. I
                  combine a keen eye for design with a focus on reliable
                  functionality to create applications that meet real-world
                  needs. Driven by a passion for clean, maintainable code and
                  continuous learning, I stay committed to adapting and growing
                  in a rapidly evolving technological landscape. My goal is to
                  translate innovative ideas into efficient, high-quality
                  software that enhances user experience and drives meaningful
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div>
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16 mt-8">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <div className="bg-gradient-to-br from-purple-950/60 to-pink-950/60 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-purple-300 text-center">
                      {category}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-slate-800/50 text-purple-300 text-sm font-semibold rounded-xl border border-slate-600 hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16 mt-8">
              Education Journey
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Timeline container */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 transform -translate-x-1/2"></div>

              {educationData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-start mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Education card */}
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

                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-0">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-slate-950"></div>
                  </div>

                  {/* Empty space to balance the layout */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <div className="transform transition-all duration-700 translate-y-0 opacity-100">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-16 mt-8">
              Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-950/60 to-pink-950/60 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-slate-200 text-sm mb-2">{cert.provider}</p>
                  <p className="text-slate-300 text-xs mb-4">{cert.year}</p>
                  {cert.pdf && (
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition"
                    >
                      View Certificate
                    </a>
                  )}
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
