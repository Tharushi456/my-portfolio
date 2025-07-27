import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-50 text-pink-700 py-6 mt-10 border-t border-pink-200">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Tharushi Dimalsha. All rights reserved.
        </p>
        <p>
          Built with <span className="text-pink-500">React</span> &{" "}
          <span className="text-pink-500">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
