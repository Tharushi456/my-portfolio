import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 lg:px-24 max-w-3xl mx-auto text-center text-[#faf5f8]"
    >
      <div className="bg-[#5e2e48]/40 backdrop-blur-md p-10 rounded-2xl shadow-2xl animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-bold text-[#bc749f] mb-8">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-[#f5e9ef] mb-10 leading-relaxed">
          I’d love to connect and discuss internship opportunities or
          collaborations. Drop me a message!
        </p>
        <a
          href="mailto:tharushi@email.com"
          className="inline-block bg-[#a45383] hover:bg-[#bc749f] text-white px-8 py-4 rounded-full shadow-lg transition duration-300 text-lg font-semibold"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
