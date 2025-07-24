import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-semibold text-pink-600 mb-6">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I’d love to connect and discuss internship opportunities or
        collaborations. Drop me a message!
      </p>
      <a
        href="mailto:tharushi@email.com"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition shadow-md"
      >
        Email Me
      </a>
    </section>
  );
}

export default Contact;
