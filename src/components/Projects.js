import React from "react";

const projects = [
  {
    title: "PetLife - Pet Healthcare Web App",
    description:
      "A platform for pet owners to connect with vets and care centers. Features include appointment booking, vaccination book, shop, and community forum.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Student Management System",
    description:
      "A RESTful API built using JAX-RS to manage students, teachers, and modules with in-memory storage.",
    tech: ["Java", "REST", "JSON"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-white via-pink-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-pink-600 mb-16">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-pink-100 shadow-md hover:shadow-xl transition duration-300 p-6 text-left"
            >
              <h3 className="text-2xl font-bold text-pink-700 mb-4">
                {proj.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-pink-100 text-pink-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
