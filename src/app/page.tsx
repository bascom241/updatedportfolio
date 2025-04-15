"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import { motion } from "framer-motion";
import { saveAs } from 'file-saver';

import {
  Mail, Github, Linkedin, Twitter, Download, Rocket,
  Briefcase, School, Award, Cpu, Database, Code2,
  ArrowRight, Send, X, Loader2, Check, AlertCircle, Terminal, MessageCircle,
  ArrowDown
} from "lucide-react";
import Typewriter from 'typewriter-effect';
import axios from 'axios';

const Home = () => {
  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatIcon, setShowChatIcon] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your portfolio assistant. Ask me anything about my work." }
  ]);
  const [userInput, setUserInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const [githubRepos, setGithubRepos] = useState<any[]>([]);
  const [reposLoading, setReposLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_8ylrkkr',
        'template_8nrkk94',
        form.current,
        'ZW99MvlPVKFRexJ7a'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          if (form.current) form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error('Email send error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleDownload = () => {
    console.log("Download initiated");
    try {
      saveAs('/Software_Engineer.pdf', 'Abdulbasit_Resume.pdf');
      console.log("Download function executed");
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/bascom241/repos?sort=updated&per_page=8'
        );
        setGithubRepos(response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setReposLoading(false);
      }
    };

    fetchGithubRepos();

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowChatIcon(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    const newUserMessage = { sender: "user", text: userInput };
    setMessages([...messages, newUserMessage]);
    setUserInput("");

    setTimeout(() => {
      const botResponses = [
        "I have extensive experience with React and Node.js.",
        "My projects are built using modern tech stacks like MERN with TypeScript.",
        "I'm currently available for freelance work and collaborations.",
        "You can view more projects in my GitHub repositories.",
        "For inquiries, please use the contact form below."
      ];
      const botMessage = {
        sender: "bot",
        text: botResponses[Math.floor(Math.random() * botResponses.length)]
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (isLoading) {
    return (
      <motion.div
        className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          animate={{
            rotate: [0, -10, 10, 0],
            y: [0, -10, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
        >
          <Code2 size={60} className="text-blue-400" />
        </motion.div>
        <motion.div className="mt-6 text-xl sm:text-2xl font-medium">
          <Typewriter
            options={{
              strings: ['Booting up portfolio...', 'Loading awesome content...', 'Almost there...'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <ToastContainer position="bottom-right" autoClose={5000} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Abdulbasit</span>
            </motion.h1>
            <motion.div className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'MERN Stack Specialist',
                    'UI/UX Enthusiast',
                    'Java and Spring Boot Developer',
                    'Freelance Developer'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              I build scalable, performant web applications with clean code and intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 overflow-hidden"
              >
                <motion.span
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 5, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }
                  }}
                  className="text-xl"
                >
                  🚀
                </motion.span>
                <span className="font-medium text-sm sm:text-base">Explore Together!</span>
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                    y: [0, -8, 8, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: 0.6
                    }
                  }}
                  className="text-xl"
                >
                  👋
                </motion.span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg overflow-hidden group flex items-center justify-center gap-2"
              >
                <motion.span
                  animate={{
                    rotate: [0, 360],
                    transition: {
                      repeat: Infinity,
                      duration: 8,
                      ease: "linear"
                    }
                  }}
                  className="text-xl"
                >
                  🌟
                </motion.span>
                <span className="font-medium text-sm sm:text-base">My Story</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }
                  }}
                  className="text-xl"
                >
                  📜
                </motion.div>
              </motion.button>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto">
              <Image
                src="/profile.jpeg"
                alt="Abdulbasit"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                priority
              />
              <div className="absolute -inset-3 sm:-inset-4 border-2 border-blue-400 rounded-full animate-pulse opacity-0 dark:opacity-100"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-blue-600 text-white p-2 sm:p-3 rounded-full shadow-lg">
              <Rocket size={24} className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Briefcase className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Projects Completed</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-xl text-center">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <School className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">2+</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Years Experience</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 sm:p-6 rounded-xl text-center col-span-2 md:col-span-1">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Award className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md ${activeTab === 'projects' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
            <button
              className={`px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-md ${activeTab === 'github' ? 'bg-white dark:bg-gray-800 shadow' : ''}`}
              onClick={() => setActiveTab('github')}
            >
              GitHub Repos
            </button>
          </div>
        </div>

        {activeTab === 'projects' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                title: "E-Commerce Platform",
                description: "Full-featured online store with payment processing and admin dashboard.",
                tags: ["React", "Node.js", "MongoDB", "Stripe"],
                image: "/portfolio2.png",
                link: "#"
              },
              {
                id: 2,
                title: "Healthcare System",
                description: "Secure platform for booking doctor appointments with real-time scheduling.",
                tags: ["React", "Node", "JWT Auth"],
                image: "/portfolio3.png",
                link: "#"
              },
              {
                id: 3,
                title: "Learning Platform",
                description: "Interactive education platform with course management and quizzes.",
                tags: ["MERN Stack", "Redux", "Tailwind CSS"],
                image: "/potfoloio1.png",
                link: "#"
              },
              {
                id: 4,
                title: "Portfolio Website",
                description: "Modern, responsive portfolio showcasing projects.",
                tags: ["Next.js", "Framer Motion"],
                image: "/portfolio2.png",
                link: "#"
              }
            ].map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-xs sm:text-sm">
                    View Project <ArrowRight size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reposLoading ? (
              <div className="col-span-3 flex justify-center py-12">
                <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
              </div>
            ) : (
              githubRepos.map((repo) => (
                <div key={repo.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{repo.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm">
                        {repo.description || "No description provided"}
                      </p>
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                    >
                      <Github size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {repo.language && (
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                        {repo.language}
                      </span>
                    )}
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                      Stars: {repo.stargazers_count}
                    </span>
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-xs sm:text-sm"
                  >
                    View on GitHub <ArrowRight size={14} className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              ))
            )}
          </div>
        )}
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">My Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {[
              { name: "React", icon: <Code2 className="text-blue-500 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-blue-100 dark:bg-blue-900/30" },
              { name: "Next.js", icon: <Cpu className="text-black dark:text-white w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-gray-100 dark:bg-gray-800" },
              { name: "Node.js", icon: <Terminal className="text-green-500 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-green-100 dark:bg-green-900/30" },
              { name: "MongoDB", icon: <Database className="text-green-700 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-green-50 dark:bg-green-800/20" },
              { name: "TypeScript", icon: <Code2 className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-blue-50 dark:bg-blue-800/20" },
              { name: "Java", icon: <Code2 className="text-red-500 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-red-100 dark:bg-red-900/30" },
              { name: "Spring Boot", icon: <Code2 className="text-green-600 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-green-100 dark:bg-green-900/30" },
              { name: "Tailwind CSS", icon: <Code2 className="text-cyan-500 w-6 h-6 sm:w-8 sm:h-8" />, color: "bg-cyan-100 dark:bg-cyan-900/30" },
            ].map((tech, index) => (
              <div
                key={index}
                className={`p-4 sm:p-6 rounded-xl ${tech.color} h-24 sm:h-32 flex flex-col items-center justify-center`}
              >
                <div className="mb-2 sm:mb-3">{tech.icon}</div>
                <p className="font-medium text-sm sm:text-base">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Have a project in mind or want to discuss opportunities? Send me a message!
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm sm:text-base"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm sm:text-base"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition flex items-center gap-1 sm:gap-2 disabled:opacity-70 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4 sm:w-5 sm:h-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Mail className="text-blue-600 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 text-xs sm:text-sm">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[0.65rem] sm:text-xs">bascom123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Terminal className="text-blue-600 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 text-xs sm:text-sm">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[0.65rem] sm:text-xs">github.com/bascom241</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Linkedin className="text-blue-600 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 dark:text-gray-300 text-xs sm:text-sm">LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-[0.65rem] sm:text-xs">linkedin.com/in/abdulbasit-abdulwahab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      {showChatIcon && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50"
        >
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center"
          >
            {isChatOpen ? (
              <X size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MessageCircle size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </motion.div>
      )}

      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 w-full max-w-xs sm:max-w-sm md:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
          style={{ maxHeight: 'calc(100vh - 120px)' }}
        >
          <div className="bg-blue-600 text-white p-3 sm:p-4 flex justify-between items-center">
            <h3 className="font-bold text-sm sm:text-base">Portfolio Assistant</h3>
            <button onClick={() => setIsChatOpen(false)}>
              <X size={18} className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="h-48 sm:h-56 p-3 sm:p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg text-sm ${msg.sender === 'user'
                    ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Send size={16} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;