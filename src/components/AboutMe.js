import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-16 lg:px-24 text-white flex justify-center"
    >
      <div className="bg-[#4f2b3e]/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl max-w-5xl text-center animate-fade-in-up space-y-20">
        {/* About Me Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#bc749f] mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-[#f5e9ef] leading-relaxed max-w-4xl mx-auto">
            I’m currently a second-year{" "}
            <span className="font-semibold">
              Computer Science undergraduate
            </span>{" "}
            at the University of Westminster. I love exploring new technologies
            and creating real-world applications that solve practical problems.
            I enjoy collaborating in diverse teams and continuously learning new
            skills to keep pace with the fast-changing tech world.
            <br />
            <br />
            I’m skilled in <span className="text-[#dba3c4]">Python</span>,{" "}
            <span className="text-[#dba3c4]">Java</span>,{" "}
            <span className="text-[#dba3c4]">JavaScript</span>,{" "}
            <span className="text-[#dba3c4]">Node.js</span>,{" "}
            <span className="text-[#dba3c4]">MongoDB</span>,{" "}
            <span className="text-[#dba3c4]">SQL</span>,{" "}
            <span className="text-[#dba3c4]">PHP</span>, and{" "}
            <span className="text-[#dba3c4]">Linux</span>.
            <br />
            <br />
            I’m seeking a dynamic internship where I can grow my skills and
            contribute to impactful projects that make a difference.
          </p>
        </div>

        {/* Education Title */}
        <h3 className="text-3xl font-semibold text-[#bc749f] text-center -mt-8 mb-6">
          Education
        </h3>

        {/* Centered Zigzag Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical center line (moved slightly up) */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1 bg-[#a45383] h-full"></div>

          {/* Timeline container */}
          <div className="space-y-16">
            {/* Left side item */}
            <div className="flex justify-start items-center w-full relative">
              <div className="w-1/2 pr-8 text-right">
                <span className="text-[#a45383] font-mono text-sm mb-1 block">
                  2009 - 2023
                </span>
                <h4 className="text-xl font-semibold text-[#f5e9ef]">
                  Loyola College, Negombo
                </h4>
                <p className="text-[#dba3c4]">Primary & Secondary Education</p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 top-2 w-5 h-5 rounded-full bg-[#a45383] border-2 border-[#faf5f8] -translate-x-1/2"></div>

              <div className="w-1/2"></div>
            </div>

            {/* Right side item */}
            <div className="flex justify-end items-center w-full relative">
              <div className="w-1/2"></div>

              {/* Dot */}
              <div className="absolute left-1/2 top-2 w-5 h-5 rounded-full bg-[#a45383] border-2 border-[#faf5f8] -translate-x-1/2"></div>

              <div className="w-1/2 pl-8 text-left">
                <span className="text-[#a45383] font-mono text-sm mb-1 block">
                  2023 - Present
                </span>
                <h4 className="text-xl font-semibold text-[#f5e9ef]">
                  University of Westminster
                </h4>
                <p className="text-[#dba3c4]">
                  BSc Computer Science Undergraduate
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold text-[#bc749f] mb-6 text-center -mt-10">
            Certifications
          </h3>
          <ul className="list-disc list-inside space-y-3 text-[#f5e9ef] text-left md:text-center md:max-w-xl mx-auto">
            <li>Full Stack Web Development Bootcamp – Codecademy (2024)</li>
            <li>Java Programming Certification – Coursera (2023)</li>
            <li>Linux Essentials – Linux Foundation (2022)</li>
            {/* Add more certifications here */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
