import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "PetLife - Pet Healthcare Web App",
    description:
      "A comprehensive platform for pet owners to connect with veterinarians and care centers. Features include appointment booking, vaccination tracking, pet shop, and community forum for pet enthusiasts.",
    fullDescription: `PetLife is a revolutionary pet healthcare platform that bridges the gap between pet owners and veterinary professionals. This comprehensive web application provides a seamless experience for managing your pet's health and wellbeing.

Key Features:
• Appointment Booking System: Schedule consultations with certified veterinarians with real-time availability
• Vaccination Tracking: Digital vaccination records with automated reminders for upcoming shots
• Pet Shop Integration: Browse and purchase pet supplies, medications, and accessories
• Community Forum: Connect with fellow pet owners, share experiences, and get advice
• Health Monitoring: Track your pet's weight, medications, and health milestones
• Multi-pet Management: Manage multiple pets under one account

Technical Implementation:
Built using modern web technologies including React for the frontend, Node.js with Express for the backend, and MongoDB for data persistence. Real-time notifications, and responsive design for mobile and desktop users.`,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-purple-600 to-pink-600",
    icon: "🐾",
    period: "Sep 2024 – Present",
    deployedUrl: "https://www.pet-lifes.com/",
    githubUrl: "",
    snapshots: [
      process.env.PUBLIC_URL + "/snapshots/homepage.png",
      process.env.PUBLIC_URL + "/snapshots/login.png",
      process.env.PUBLIC_URL + "/snapshots/channeling.png",
      process.env.PUBLIC_URL + "/snapshots/carecenterbooking.png",
      process.env.PUBLIC_URL + "/snapshots/docdash.jpg",
    ],
  },
  {
    title: "Book Store API (Java)",
    description:
      "Developed a RESTful Bookstore API using Java/JAX-RS with CRUD for books, authors, and customers, shopping cart, order system, Postman docs, and pure JAX-RS implementation.",
    fullDescription: `A robust RESTful API for a comprehensive bookstore management system built with Java and JAX-RS. This backend service provides all the necessary endpoints for managing a modern online bookstore.

Core Functionality:
• Book Management: Complete CRUD operations for books with search and filtering capabilities
• Author Management: Manage author profiles and their associated publications
• Customer System: User registration, authentication, and profile management
• Shopping Cart: Add, remove, and modify items in the shopping cart
• Order Processing: Complete order lifecycle from creation to fulfillment
• Inventory Management: Track stock levels and automatic updates

API Features:
• RESTful Design: Following REST principles with proper HTTP methods and status codes
• Data Validation: Comprehensive input validation and error handling
• Documentation: Complete Postman collection with examples and test cases
• JSON Response Format: Consistent JSON structure across all endpoints
• Exception Handling: Proper error responses with meaningful messages

Technical Stack:
Implemented using pure JAX-RS without additional frameworks, demonstrating solid understanding of Java web services. The API is thoroughly tested and documented for easy integration.`,
    tech: ["Java", "JAX-RS", "Postman"],
    gradient: "from-blue-600 to-cyan-600",
    icon: "📚",
    period: "Feb 2025 – Apr 2025",
    githubUrl: "https://github.com/Tharushi456/bookstore-rest-api",
    snapshots: [],
  },
  {
    title: "Real-Time Ticketing System",
    description:
      "Built a ticketing simulation system using Java (Spring Boot) and ReactJS, featuring real-time processing based on the Producer-Consumer pattern. Implemented both CLI and GUI versions, with dynamic ticket release and purchase logic based on configurable parameters such as release rate, retrieval rate, and capacity.",
    fullDescription: `A comprehensive ticketing simulation system demonstrating concurrent vendor-customer interaction, robust configuration-driven logic, and seamless CLI/GUI integration with thorough validation and logging mechanisms.
    
    Core Features:
    • Dual Implementation Architecture: The system is implemented in two forms — a terminal-based application using core Java, and a graphical user interface using Spring Boot (backend) and React (frontend). Both variants simulate the interaction between multiple vendors and customers through a shared ticket pool.
    • Dynamic Ticket Management: Simulates real-time ticket release by vendors and purchase by customers using configurable parameters such as release rate, retrieval rate, and ticket pool capacity.
    • Configurable Startup Inputs: System behavior is determined by user-defined configurations at startup, including:
    
    Total tickets per vendor
    
    Release and retrieval rates
    
    Maximum ticket pool capacity
    
    Number of vendors and customers
    • Ticket Pool Synchronization: Maintains ticket count integrity by ensuring vendors pause release when capacity is full, and customers wait when tickets are unavailable.
    • Concurrency Simulation: Emulates real-time concurrent actions of vendors and customers using thread-based logic in CLI and asynchronous event handling in GUI.
    • Robust Input Validation: Prevents and handles invalid configuration inputs with appropriate error messaging in both CLI and GUI environments.
    • Real-time Log Visualization:
    
    In CLI: ticketing events are logged clearly in the terminal
    
    In GUI: real-time updates of ticket availability and actions via dynamic UI components
    
    Modular Design:
    • Ticket Pool Manager: Core logic module that manages ticket availability, enforces capacity limits, and synchronizes access between threads.
    • Vendor Thread Handler: Releases tickets at a configured rate and checks against maximum pool capacity before releasing further.
    • Customer Thread Handler: Purchases tickets from the pool, honoring the retrieval rate and handling unavailability gracefully.
    • Configuration Loader: Collects and validates initial parameters, ensuring only valid numeric inputs are accepted.
    • Log Manager:
    
    In CLI: formats and displays terminal logs for every vendor/customer action
    
    In GUI: communicates backend events to frontend for real-time UI updates
    • GUI Frontend (React): Presents ticket logs, pool status, and configuration fields in an interactive and user-friendly layout.
    • Backend Service Layer (Spring Boot): Manages concurrent vendor/customer logic and pushes updates to the frontend.
    
    System Capabilities:
    • Multi-Agent Simulation: Supports simulation with various combinations of vendors and customers — one-to-one, one-to-many, many-to-one, and many-to-many.
    • Capacity Enforcement: Automatically halts ticket release when pool capacity is reached and resumes once space becomes available.
    • Performance Stability Under Load: Designed to handle long runtimes and large-scale scenarios with thousands of tickets without system crashes.
    • Edge Case Handling: Manages scenarios with high or mismatched release/retrieval rates, zero available tickets, and excess vendors or customers.
    • Log Consistency & Formatting: Ensures clean and non-overlapping logs across both CLI and GUI versions, even under concurrent access.
    • File I/O-Free Real-Time Processing: Operates entirely in memory for speed and real-time responsiveness, especially in GUI.
    • Interactive UI: GUI offers a clear view of live events and status updates, enhancing usability for simulation observers.
    
    This project exemplifies the principles of modular system design, multi-threaded programming, and modern full-stack development. It demonstrates the effective application of concurrency control, real-time UI rendering, and comprehensive input validation within both command-line and graphical environments.`,
    tech: ["Java", "Spring Boot", "ReactJS", "MongoDB"],
    gradient: "from-green-600 to-lime-600",
    icon: "🎫",
    period: "Sep 2024 – Dec 2024",
    githubUrl:
      "https://github.com/Tharushi456/Real-Time-Event-Ticketing-System-",
    snapshots: [process.env.PUBLIC_URL + "/snapshots/ticketingsystem.png"],
  },
  {
    title: "Plane Ticket Booking System",
    description:
      "Created a console-based Java flight booking system with OOP, reservation and cancellation, and optimized search and seat availability handling.",
    fullDescription: `A comprehensive console-based plane seat reservation system demonstrating solid user-defined function design and efficient data validation techniques.

    Core Features:
    • Seat Reservation Management: Allows users to buy, cancel, and search for seat reservations in a small private aircraft with varying seat configurations across four rows (A–D).
    • Seat Status Tracking: Utilizes standard 2D arrays to track the availability of each seat (0 = available, 1 = sold).
    • Input Error Handling: Ensures that seat row and number inputs are within valid bounds and that seats are not double-booked or incorrectly canceled.
    • Visual Seating Plan Display: Presents a visual layout of the aircraft seating where sold seats are marked with X and available seats with O.
    • Ticket and Customer Info Handling: Captures personal information (name, surname, email) when a ticket is purchased, linking each ticket to a Person object.
    • Persistent Ticket Recording: Saves each sold ticket's details (including passenger data) to a file named according to the seat code (e.g., B2.txt).
    
    Modular Design:
    • buy_seat Function: Handles user input for selecting a seat and person information, checks seat availability, and stores ticket data.
    • cancel_seat Function: Validates and cancels a seat reservation, also removing the associated ticket object.
    • find_first_available Function: Scans the seat matrix in a defined row order (A–D) to find and display the first available seat.
    • show_seating_plan Function: Outputs the formatted current seating chart, maintaining the spatial integrity of each row.
    • print_tickets_info Function: Displays all sold tickets with corresponding passenger details and computes the total revenue.
    • search_ticket Function: Looks up a specific seat to determine if it is sold and shows the related ticket and person data if found.
    • Ticket save Method: Automatically writes ticket and person data to a uniquely named file upon purchase for external persistence.
    
    System Capabilities:
    • Interactive Console Menu: Guides users with a clear and repeatable menu-driven interface to execute all major actions, including exit.
    • Data-Driven Ticketing: Supports the addition, search, and deletion of seat records via structured object-oriented storage.
    • Persistent File Output: Archives ticket data to individual text files named after their corresponding seat, ensuring traceability.
    • Flexible Seat Configuration: Supports non-uniform row sizes and correct seat addressing using combined row-letter and seat-number codes.
    • Object-Oriented Architecture: Leverages encapsulated Ticket and Person classes to model real-world entities effectively.
    
    This system showcases clean code structure, modular user-defined methods, robust validation routines, and practical file operations, delivering a full-featured console application for managing small aircraft seat reservations.`,
    tech: ["Java", "OOP"],
    gradient: "from-yellow-500 to-orange-500",
    icon: "✈️",
    period: "Feb 2024 – Mar 2024",
    githubUrl: "https://github.com/Tharushi456/Plane-Ticket-Booking-System",
    snapshots: [],
  },
  {
    title: "Student Grading System (Python)",
    description:
      "Built a Python app to automate grading with data validation, logic for grade calculation, and reporting — improving grading efficiency.",
    fullDescription: `A comprehensive console-based student progression prediction system demonstrating solid user-defined function design and efficient data validation techniques.

    Core Features:
    • Progression Outcome Prediction: Determines accurate student outcomes (Progress, Progress (module trailer), Do not Progress – module retriever, or Exclude) based on credit input.
    • Credit Validation: Ensures all inputs are valid integers and within the specified credit range (0 to 120 in steps of 20).
    • Input Error Handling: Detects and handles invalid data types, out-of-range values, and incorrect total credits.
    • Multiple Student Processing: Allows progression evaluation for multiple students until the user opts to quit.
    • Graphical Histogram: Uses the graphics.py module to visually represent the count of students in each outcome category.
    • Data Persistence: Stores progression outcomes in a list and exports results to a text file for future access.
    
    Modular Design:
    • Input Validation Function: Handles all credit input validations and error prompts.
    • Outcome Determination Function: Contains optimized conditional logic to determine the correct progression outcome without exhaustive enumeration.
    • Loop Controller Function: Manages repeated input for multiple students and handles user prompts to continue or quit.
    • Histogram Function: Generates a graphical histogram using graphics.py based on outcome counts.
    • List Storage Function: Records each input set with the corresponding outcome into a list for later review.
    • File I/O Function: Writes all progression results to a text file and reads them back for display.
    
    System Capabilities:
    • Accurate Progression Mapping: Based on the university's credit table with 28 valid combinations.
    • Interactive Console Workflow: Clear prompts and feedback ensure ease of use for staff users.
    • Dynamic Histogram Visualization: Immediate graphical feedback on student performance distribution.
    • Structured Outcome Logging: Maintains detailed logs of input data for audit or review.
    • Readable Output Format: Displays outcomes in a clear, concise format during and after the session.
    
    The system showcases clean code practices, modularity through user-defined functions, precise error handling, and efficient logic to determine student progression outcomes.`,
    tech: ["Python"],
    gradient: "from-pink-500 to-red-500",
    icon: "🧮",
    period: "Nov 2023 – Dec 2023",
    githubUrl: "https://github.com/Tharushi456/Grading-System",
    snapshots: [],
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    // Simulate loading time for projects
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1800);

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);

        // Calculate visibility based on scroll position
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        const elementPosition = rect.top;

        if (elementPosition < windowHeight - elementVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      clearTimeout(loadingTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Loading component
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
        {/* Animated background orbs during loading */}
        <div className="absolute top-20 left-20 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "1200ms" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"
          style={{ animationDelay: "2400ms" }}
        />

        <div className="text-center z-10">
          {/* loading spinner */}
          <div className="relative mb-8">
            <div className="w-24 h-24 border-4 border-purple-700/30 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
            <div
              className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-pink-600 rounded-full animate-spin mx-auto"
              style={{ animationDirection: "reverse", animationDuration: "2s" }}
            ></div>

            <div
              className="absolute inset-4 w-16 h-16 border-2 border-transparent border-l-indigo-600 rounded-full animate-spin mx-auto"
              style={{ animationDuration: "1s" }}
            ></div>
          </div>

          {/* Loading text */}
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse mb-2">
            Loading Projects...
          </div>

          <div className="text-gray-400 text-lg animate-pulse">
            Preparing showcase ✨
          </div>

          {/*loading dots animation */}
          <div className="flex justify-center space-x-3 mt-6">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-pink-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-slate-800 rounded-full mx-auto mt-8 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-32 px-6 relative overflow-hidden min-h-screen`}
      style={{
        transform: `translateY(${Math.min(scrollY * 0.1, 50)}px)`,
        transition: "transform 0.5s ease-out",
      }}
    >
      {/* Background Orbs */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-12 animate-pulse" />
      <div
        className="absolute bottom-20 right-20 w-80 h-80 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse"
        style={{ animationDelay: "2000ms" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"
        style={{ animationDelay: "4000ms" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight animate-pulse">
            Featured Projects
          </h2>
          <div
            className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto animate-pulse"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "center",
              transition: "transform 0.8s ease-out 0.3s",
            }}
          />
          <p
            className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s",
            }}
          >
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ease-out ${
                  idx * 0.1
                }s, transform 0.6s ease-out ${idx * 0.1}s`,
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />

              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:scale-[1.02] shadow-2xl h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-purple-300 text-sm font-mono bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-slate-800/50 text-purple-300 text-sm font-semibold rounded-full border border-slate-600 hover:border-purple-500 hover:bg-purple-900/30 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => handleViewProject(project)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <span className="text-lg">🚀</span>
                    </div>
                  </button>
                  {project.githubUrl && (
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="px-6 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <span>GitHub</span>
                        <span className="text-lg">⚡</span>
                      </div>
                    </button>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div
          className="text-center mt-20"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s",
          }}
        >
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <button
              onClick={() => setShowAll(!showAll)}
              className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold text-lg">
                  {showAll ? "Show Less" : "View All Projects"}
                </span>
                <div
                  className={`w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                    showAll ? "rotate-180" : "group-hover:rotate-90"
                  }`}
                >
                  <span className="text-white text-sm">
                    {showAll ? "↑" : "→"}
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                {selectedProject.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <span className="text-purple-300 text-sm font-mono bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30 mt-2 inline-block">
                  {selectedProject.period}
                </span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 text-purple-300 text-sm font-semibold rounded-full border border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Full Description */}
            <div className="prose prose-invert max-w-none mb-8">
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {selectedProject.fullDescription}
              </div>
            </div>

            {/* Deployed URL Button */}
            {selectedProject.deployedUrl && (
              <div className="mb-8">
                <a
                  href={selectedProject.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Visit Live Site</span>
                  <span className="text-lg">🌐</span>
                </a>
              </div>
            )}

            {/* Snapshots */}
            {selectedProject.snapshots.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>Project Screenshots</span>
                  <span>📸</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.snapshots.map((snapshot, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
                      <div className="relative bg-slate-800 rounded-2xl overflow-hidden">
                        <img
                          src={snapshot}
                          alt={`${selectedProject.title} snapshot ${idx + 1}`}
                          className="w-full max-h-[400px] object-contain hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pt-4 border-t border-slate-700">
              {selectedProject.githubUrl && (
                <button
                  onClick={() =>
                    window.open(selectedProject.githubUrl, "_blank")
                  }
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                >
                  <span>View on GitHub</span>
                  <span>⚡</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
