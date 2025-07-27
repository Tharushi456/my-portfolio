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
    <section
      id="skills"
      className="py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-br from-[#faf5f8] via-[#f0d5e6] to-[#fbe1f0] text-[#2d0f1d]"
    >
      <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#a45383] mb-10 tracking-tight">
          My <span className="text-[#703455]">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-white/80 border border-[#e0b9c9] rounded-full text-[#703455] text-sm md:text-base font-semibold shadow-md hover:bg-white hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
