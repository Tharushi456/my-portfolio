import React from "react";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "Node.js",
  "React",
  "MongoDB",
  "SQL",
  "PHP",
  "Linux",
];

function Skills() {
  return (
    <section className="py-20 px-4 bg-pink-100">
      <h2 className="text-4xl font-semibold text-center text-pink-600 mb-10">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-white border border-pink-300 rounded-full text-pink-700 text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
