import React from "react";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: "#", // CUSTOMIZE: Add your GitHub URL
      color: "from-gray-600 to-gray-800",
      hoverColor: "group-hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/dimalshacooray", // CUSTOMIZE: Add your LinkedIn URL
      color: "from-blue-600 to-blue-800",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      name: "X",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "#", // CUSTOMIZE: Add your Twitter/X URL
      color: "from-slate-600 to-slate-800",
      hoverColor: "group-hover:text-slate-300"
    },
    {
      name: "Email",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
        </svg>
      ),
      href: "mailto:dimalshacooray@gmail.com",
      color: "from-purple-600 to-pink-600",
      hoverColor: "group-hover:text-purple-400"
    },
  ];

  const quickLinks = [
    { 
      name: "Home", 
      href: "#home"
    },
    { 
      name: "About", 
      href: "#about"
    },
    { 
      name: "Projects", 
      href: "#projects"
    },
    { 
      name: "Contact", 
      href: "#contact"
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-20 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />
      <div className="absolute bottom-0 right-20 w-32 h-32 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${social.color} hover:from-purple-600 hover:to-pink-600 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 border border-slate-700 group-hover:border-purple-500/50 shadow-lg group-hover:shadow-purple-500/25`}>
                    <span className={`text-white transition-all duration-300 ${social.hoverColor} group-hover:scale-110`}>
                      {social.icon}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-slate-600">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Simple Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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
              <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
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