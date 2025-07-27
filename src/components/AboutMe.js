import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-24 text-white flex justify-center"
    >
      <div className="bg-[#5e2e48]/40 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-3xl text-center animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#bc749f] mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-[#f5e9ef] leading-relaxed">
          I’m currently a second-year{" "}
          <span className="font-semibold">Computer Science undergraduate</span>{" "}
          at the University of Westminster. I love exploring new technologies
          and creating real-world applications.
          <br />
          <br />
          I’m skilled in <span className="text-[#dba3c4]">Python</span>,{" "}
          <span className="text-[#dba3c4]">Java</span>,{" "}
          <span className="text-[#dba3c4]">JavaScript</span>,
          <span className="text-[#dba3c4]"> Node.js</span>,{" "}
          <span className="text-[#dba3c4]">MongoDB</span>,{" "}
          <span className="text-[#dba3c4]">SQL</span>,{" "}
          <span className="text-[#dba3c4]">PHP</span>, and
          <span className="text-[#dba3c4]"> Linux</span>.
          <br />
          <br />
          I’m seeking a dynamic internship where I can grow my skills and
          contribute to impactful projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
