import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Hi Tharushi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );

    // Open default email client
    window.location.href = `mailto:dimalshacooray@gmail.com?subject=${subject}&body=${body}`;

    setSubmitStatus("success");
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("");
    }, 3000);
  };

  // CV download function
  const handleCVDownload = () => {
    const cvUrl = "/cv/cv.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight">
                Let's Create
                <br />
                <span className="text-white">Together</span>
              </h2>
              <div className="h-1 w-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Ready to bring your ideas to life? I'm passionate about creating
                innovative solutions and would love to discuss internship
                opportunities or exciting collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-purple-300">dimalshacooray@gmail.com</p>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/dimalshacooray"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">LinkedIn</h3>
                    <p className="text-blue-300">Connect professionally</p>
                  </div>
                </div>
              </a>

              {/* CV Download */}
              <div onClick={handleCVDownload} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">Download CV</h3>
                  <p className="text-green-300">Get my latest resume</p>
                </div>
                <div className="ml-auto">
                  <span className="text-white text-xl">⬇️</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            {/* Form Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 animate-pulse" />

            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send me a message
                  </h3>
                  <p className="text-gray-400">
                    Fill out the form below and I'll get back to you soon!
                  </p>
                </div>

                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-purple-300 font-semibold text-sm uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-purple-300 font-semibold text-sm uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label className="text-purple-300 font-semibold text-sm uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-purple-300 font-semibold text-sm uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-slate-800/50 border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or how we can work together..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Opening Email Client...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span>Send Message</span>
                      <span className="text-xl">✨</span>
                    </div>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="text-center p-4 bg-green-900/30 border border-green-500/30 rounded-xl">
                    <p className="text-green-300 font-semibold">
                      🎉 Email client opened! Thanks for reaching out!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;