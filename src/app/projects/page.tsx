"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X, Layers, HardHat, MessageCircle, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "GuidEd - Learning Management System",
    description: "A comprehensive online education platform connecting students with instructors through interactive courses.",
    image: "/potfoloio1.png",
    techStack: ["React", "Node.js", "MongoDB", "Express", "JWT Auth", "React Router"],
    link: "https://guided-edu.onrender.com/",
    gitHub: "https://github.com/bascom241/guided",
    challenges: [
      "Implementing real-time course progress tracking",
      "Handling concurrent user enrollments",
      "Secure payment integration"
    ],
    solutions: [
      "Developed a custom progress tracking algorithm",
      "Optimized database queries with indexing",
      "Integrated Stripe with webhook verification"
    ],
    impact: "Increased student engagement by 40% and reduced instructor workload by 25%"
  },
  {
    title: "ShopIt - E-commerce Platform",
    description: "Full-featured online store with product management, cart system, and secure checkout.",
    image: "/portfolio2.png",
    link: "https://frontend0.onrender.com",
    gitHub: "https://github.com/bascom241/Eccormerce1",
    techStack: ["Next.js", "Stripe", "MongoDB", "Express", "Redux", "Tailwind CSS"],
    challenges: [
      "Managing complex product variants",
      "Cart persistence across sessions",
      "Fraud prevention"
    ],
    solutions: [
      "Created a flexible product variant schema",
      "Implemented localStorage + database sync",
      "Added address verification system"
    ],
    impact: "Processed 500+ orders with 0 payment failures in first month"
  },
  {
    title: "ShopIt Admin Dashboard",
    description: "Centralized management system for e-commerce operations and analytics.",
    image: "/portfolio2.png",
    link: "https://myadminpanel.onrender.com",
    gitHub: "https://github.com/bascom241/Eccormerce1",
    techStack: ["Next.js", "Chart.js", "MongoDB Aggregation", "Express"],
    challenges: [
      "Real-time sales analytics",
      "Bulk product operations",
      "Role-based access control"
    ],
    solutions: [
      "Built custom data aggregation pipelines",
      "Implemented CSV import/export",
      "Developed granular permission system"
    ],
    impact: "Reduced administrative tasks by 60% for store owners"
  },
  {
    title: "Doctor Appointment System",
    description: "Healthcare scheduling platform connecting patients with medical professionals.",
    image: "/portfolio3.png",
    link: "https://doctor-appointment-3-9yn3.onrender.com/",
    gitHub: "https://github.com/bascom241/Doctor-Appointment",
    techStack: ["MERN Stack", "Redux", "Cloudinary", "JWT Auth"],
    challenges: [
      "Calendar scheduling conflicts",
      "HIPAA-compliant data handling",
      "Notification system"
    ],
    solutions: [
      "Implemented time slot validation",
      "Encrypted sensitive health data",
      "Integrated Twilio for SMS alerts"
    ],
    impact: "Served 200+ patients with 95% satisfaction rate"
  },
  {
    title: "SPAN Connect",
    description: "Official platform for SPAN Association showcasing events and member activities.",
    image: "/portfolio4.png",
    link: "https://spanunilorinchapter.vercel.app/",
    gitHub: "",
    techStack: ["Next.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
    challenges: [
      "Dynamic content updates by non-technical admins",
      "Event registration system",
      "Member engagement tracking"
    ],
    solutions: [
      "Built CMS-like interface",
      "Created automated confirmation flows",
      "Implemented analytics dashboard"
    ],
    impact: "Increased member participation by 75%"
  },
  {
    title: "Architectural Firm Website",
    description: "Modern showcase for architectural services with portfolio gallery and client portal.",
    image: "/Architecture.png",
    link: "https://client-architecture.vercel.app/",
    gitHub: "",
    techStack: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    challenges: [
      "3D model rendering performance",
      "Client proofing system",
      "Mobile responsiveness"
    ],
    solutions: [
      "Optimized 3D assets with compression",
      "Built annotation tool for feedback",
      "Implemented adaptive design system"
    ],
    impact: "Generated 30+ qualified leads in first month"
  }
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen px-4 sm:px-6 py-12 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          My Development Projects
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Each project represents unique challenges I've solved with clean, efficient code and thoughtful architecture.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 hover:border-purple-500 transition-all cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden rounded-lg mb-4">
              <Image 
                src={project.image} 
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                alt={project.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-sm">Click to view details</p>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">{project.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span key={i} className="bg-gray-700/50 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="bg-gray-900/50 text-xs px-3 py-1 rounded-full">
                  +{project.techStack.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 rounded-xl border border-gray-700 max-w-2xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e:any) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-900/50 p-1 rounded-full"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="relative h-64 w-full">
                <Image 
                  src={selectedProject.image} 
                  fill
                  className="object-cover"
                  alt={selectedProject.title} 
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-purple-400 flex items-center gap-2">
                      <HardHat size={18} /> Challenges
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-purple-400">•</span> {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-green-400 flex items-center gap-2">
                      <Layers size={18} /> Solutions
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400">•</span> {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {selectedProject.impact && (
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800/50 mb-6">
                    <h3 className="font-semibold text-lg mb-2 text-blue-400">Impact</h3>
                    <p className="text-gray-300">{selectedProject.impact}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 mb-4">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {selectedProject.link && (
                    <Link 
                      href={selectedProject.link}
                      target="_blank"
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </Link>
                  )}
                  {selectedProject.gitHub && (
                    <Link 
                      href={selectedProject.gitHub}
                      target="_blank"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      <Github size={16} /> View Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Technologies I Master</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(projects.flatMap(p => p.techStack))).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;