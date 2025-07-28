import React from "react";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "⚡",
      href: "#",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      href: "#",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Twitter",
      icon: "🐦",
      href: "#",
      color: "from-sky-600 to-sky-800",
    },
    {
      name: "Email",
      icon: "📧",
      href: "mailto:tharushi@email.com",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#" },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Tharushi Cooray
              </h3>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6" />
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Passionate developer crafting innovative digital experiences
                with modern technologies. Always excited to take on new
                challenges and learn cutting-edge solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 border border-slate-700 group-hover:border-purple-500/50">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Built With</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div
                  className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div
                  className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <span>Modern Design</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div
                  className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />
                <span>Love & Caffeine</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Tharushi Cooray. All rights
                reserved.
              </p>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </footer>
  );
}

export default Footer;
