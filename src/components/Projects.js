import React, { useState } from "react";

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
• Emergency Services: Quick access to emergency veterinary services and contacts
• Multi-pet Management: Manage multiple pets under one account

Technical Implementation:
Built using modern web technologies including React for the frontend, Node.js with Express for the backend, and MongoDB for data persistence. The application features JWT authentication, real-time notifications, and responsive design for mobile and desktop users.`,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-purple-600 to-pink-600",
    icon: "🐾",
    period: "Sep 2024 – Present",
    deployedUrl: "https://petlife-marketing.com",
    githubUrl: "https://github.com/username/petlife",
    snapshots: [
      "https://via.placeholder.com/400x250/6366f1/white?text=PetLife+Dashboard",
      "https://via.placeholder.com/400x250/8b5cf6/white?text=Appointment+Booking",
      "https://via.placeholder.com/400x250/ec4899/white?text=Pet+Profile",
      "https://via.placeholder.com/400x250/10b981/white?text=Community+Forum",
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
    githubUrl: "https://github.com/username/bookstore-api",
    snapshots: [],
  },
  {
    title: "Real-Time Ticketing System",
    description:
      "Built a ticket booking platform using Java (Spring Boot) and ReactJS with real-time processing using Producer-Consumer pattern, CLI version, and MongoDB for data handling.",
    fullDescription: `A sophisticated real-time ticketing system that handles high-concurrency ticket booking scenarios using advanced design patterns and modern technologies.

System Architecture:
• Producer-Consumer Pattern: Efficient handling of concurrent booking requests
• Real-time Processing: Instant updates on ticket availability and booking status
• Multi-interface Support: Both web interface (React) and CLI version available
• Event-driven Architecture: Asynchronous processing for better performance

Key Features:
• Concurrent Booking: Handle multiple users booking tickets simultaneously
• Real-time Updates: Live ticket availability updates across all connected clients
• Queue Management: Fair queue system for high-demand events
• Payment Integration: Secure payment processing with transaction management
• Seat Selection: Interactive seat selection with real-time availability
• Booking History: Complete booking history and ticket management

Technical Implementation:
Backend built with Spring Boot providing robust REST APIs, while the frontend uses ReactJS for a responsive user interface. MongoDB stores all transactional data with proper indexing for optimal performance. The CLI version demonstrates the same core functionality for server environments.`,
    tech: ["Java", "Spring Boot", "ReactJS", "MongoDB"],
    gradient: "from-green-600 to-lime-600",
    icon: "🎫",
    period: "Sep 2024 – Dec 2024",
    githubUrl: "https://github.com/username/ticketing-system",
    snapshots: [
      "https://via.placeholder.com/400x250/16a34a/white?text=Ticket+Booking",
      "https://via.placeholder.com/400x250/65a30d/white?text=Real-time+Updates",
      "https://via.placeholder.com/400x250/84cc16/white?text=Seat+Selection",
    ],
  },
  {
    title: "Plane Ticket Booking System",
    description:
      "Created a console-based Java flight booking system with OOP, reservation and cancellation, and optimized search and seat availability handling.",
    fullDescription: `A comprehensive console-based flight booking system demonstrating solid object-oriented programming principles and efficient data management techniques.

Core Features:
• Flight Search: Advanced search functionality with multiple filters (destination, date, price)
• Seat Management: Intelligent seat allocation with availability tracking
• Reservation System: Complete booking workflow from search to confirmation
• Cancellation Handling: Flexible cancellation policies with automatic refund calculation
• Passenger Management: Manage passenger details and travel preferences
• Pricing Engine: Dynamic pricing based on availability and demand

Object-Oriented Design:
• Flight Class: Encapsulates flight details and operations
• Passenger Class: Manages passenger information and booking history
• Booking Class: Handles reservation logic and state management
• Airport Class: Manages airport information and connections
• Payment Class: Processes payments and manages transactions

System Capabilities:
• Multi-city Bookings: Support for complex itineraries with connections
• Group Bookings: Handle multiple passengers in single transactions
• Waitlist Management: Automatic notification when seats become available
• Loyalty Program: Basic frequent flyer program integration
• Report Generation: Generate booking reports and statistics

The system showcases clean code practices, proper exception handling, and efficient algorithms for search and booking operations.`,
    tech: ["Java", "OOP"],
    gradient: "from-yellow-500 to-orange-500",
    icon: "✈️",
    period: "Feb 2024 – Mar 2024",
    githubUrl: "https://github.com/username/plane-booking",
    snapshots: [],
  },
  {
    title: "Student Grading System (Python)",
    description:
      "Built a Python app to automate grading with data validation, logic for grade calculation, and reporting — improving grading efficiency.",
    fullDescription: `An intelligent student grading system that automates the complex process of grade calculation and reporting, significantly improving educational workflow efficiency.

Key Functionalities:
• Automated Grading: Intelligent algorithms for calculating final grades based on multiple criteria
• Data Validation: Robust input validation ensuring data integrity and consistency
• Grade Analytics: Comprehensive statistical analysis of student performance
• Report Generation: Professional reports for students, parents, and administrators
• Grade Distribution: Visual representation of grade distributions and trends
• Performance Tracking: Monitor student progress over time

Features:
• Multiple Grading Schemes: Support for various grading systems (letter grades, percentages, GPA)
• Weighted Categories: Flexible weighting for different assignment types
• Extra Credit Handling: Proper handling of bonus points and extra credit assignments
• Grade Curves: Optional curve application for class-wide grade adjustments
• Attendance Integration: Factor attendance into final grade calculations
• Late Penalty Calculation: Automatic late penalty application with customizable rules

Technical Highlights:
• Data Processing: Efficient handling of large datasets with pandas integration
• File I/O Operations: Support for multiple file formats (CSV, Excel, JSON)
• Error Handling: Comprehensive error handling with user-friendly messages
• Modular Design: Clean, maintainable code structure with separate modules
• Unit Testing: Thorough test coverage ensuring reliability

The system has proven to reduce grading time by 75% while improving accuracy and consistency.`,
    tech: ["Python"],
    gradient: "from-pink-500 to-red-500",
    icon: "🧮",
    period: "Nov 2023 – Dec 2023",
    githubUrl: "https://github.com/username/grading-system",
    snapshots: [],
  },
  {
    title: "Pet Healthcare Management System",
    description:
      "PetLife full-stack app with React frontend and Node backend. Features health tracking, digital vaccination, Google Calendar integration, and secure auth.",
    fullDescription: `A comprehensive pet healthcare management system that provides pet owners with powerful tools to monitor and manage their pets' health and wellness.

Health Management Features:
• Digital Health Records: Complete medical history tracking with vet visit logs
• Vaccination Scheduler: Automated reminders for vaccinations and boosters
• Medication Tracking: Daily medication reminders with dosage tracking
• Weight Monitoring: Track weight changes with visual charts and trends
• Symptom Logging: Record and track health symptoms and behaviors
• Emergency Contacts: Quick access to emergency veterinary services

Integration Capabilities:
• Google Calendar Sync: Automatically sync appointments and reminders
• Vet Clinic Integration: Direct communication with veterinary practices
• Prescription Management: Digital prescription tracking and refill reminders
• Insurance Integration: Connect with pet insurance providers for claims

Technical Architecture:
• Frontend: React with modern hooks and context API for state management
• Backend: Node.js with Express providing robust REST API endpoints
• Database: MongoDB with proper indexing for optimal query performance
• Authentication: JWT-based secure authentication with role-based access
• Real-time Features: WebSocket integration for live notifications
• File Upload: Secure image upload for pet photos and medical documents

Security & Privacy:
• Data Encryption: All sensitive data encrypted at rest and in transit
• HIPAA Compliance: Following healthcare data protection standards
• User Privacy: Strict privacy controls with granular sharing permissions
• Backup System: Automated daily backups with disaster recovery plans

The system has helped over 1,000 pet owners better manage their pets' healthcare needs.`,
    tech: ["ReactJS", "NodeJS", "MongoDB"],
    gradient: "from-indigo-600 to-violet-600",
    icon: "🐶",
    period: "Sep 2024 – Present",
    githubUrl: "https://github.com/username/pet-healthcare",
    snapshots: [
      "https://via.placeholder.com/400x250/4f46e5/white?text=Health+Dashboard",
      "https://via.placeholder.com/400x250/7c3aed/white?text=Vaccination+Tracker",
      "https://via.placeholder.com/400x250/6366f1/white?text=Calendar+Integration",
    ],
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-32 px-6 relative overflow-hidden min-h-screen"
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
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 leading-tight animate-pulse">
            Featured Projects
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto animate-pulse" />
          <p className="text-gray-300 text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {visibleProjects.map((project, idx) => (
            <div key={idx} className="group relative">
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
                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="px-6 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    <div className="flex items-center gap-2">
                      <span>GitHub</span>
                      <span className="text-lg">⚡</span>
                    </div>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-full blur-lg" />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-20">
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
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pt-4 border-t border-slate-700">
              <button
                onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <span>View on GitHub</span>
                <span>⚡</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
