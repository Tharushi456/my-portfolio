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
    <section id="projects" className="py-20 px-4 text-center">
      <h2 className="text-4xl font-semibold text-pink-600 mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="border border-pink-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold text-pink-700 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-700 mb-3">{proj.description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm bg-pink-100 px-3 py-1 rounded-full text-pink-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
