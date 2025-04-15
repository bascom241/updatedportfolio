"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop2, User, CalendarCheck, Briefcase, GraduationCap, Layers, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "Kwaratech",
    role: "Full Stack Developer",
    period: "2023 - Present",
    icon: <Laptop2 className="text-lime-400" />,
    details:[
      "Facilitated development of an LMS project using the MERN stack by mentoring and guiding junior developers",
      "Taught end-to-end development workflows including frontend (React) and backend (Node.js, Express, MongoDB)",
      "Actively participated in project planning, architecture discussions, and review sessions to ensure successful implementation",
      "Provided hands-on guidance to students in building real-world projects, including LMS dashboards and landing pages",
      "Prepared students for technical presentations and helped them understand software architecture and deployment strategies"
    ]
    ,
    skills: ["React", "Node.js", "MongoDB", "Redux", "AWS","MentorShip"]
  },
  {
    company: "Tech Grass Root",
    role: "Coding Instructor",
    period: "2022 - 2023",
    icon: <User className="text-lime-400" />,
    details: [
      "Taught full-stack development to 50+ students with 95% satisfaction rate",
      "Designed curriculum and hands-on projects increasing student retention by 40%",
      "Conducted live coding sessions and code reviews to enhance learning",
      "Created 15+ tutorial videos with 10,000+ combined views"
    ],
    skills: ["Teaching", "Curriculum Design", "MERN Stack", "Public Speaking"]
  },
  {
    company: "  Span Association",
    role: "Software Developer",
    period: "2022 - 2024",
    icon: <CalendarCheck className="text-lime-400" />,
    details: [
      "Built a landing page for Span to showcase its activities and services using modern frontend technologies",
      "Led technical decision-making for project architecture and design implementation",
      "Collaborated with team members to define project scope and ensure alignment with Span’s goals",
      "Provided guidance on UI/UX best practices to enhance user engagement and accessibility"
    ]
    ,
    skills: ["HTML", "CSS", "JavaScript", "React", "UI/UX"]
  },
  {
    company: "Tosh Consult",
    role: "Software Developer & Instructor",
    period: "2024 - 2025",
    icon: <Briefcase className="text-lime-400" />,
    details: [
      "Developed client web applications with custom features",
      "Mentored junior developers in best practices",
      "Implemented responsive designs for mobile compatibility",
      "Conducted workshops on modern web technologies",
      "Collaborated with cross-functional teams to deliver projects on time and within budget",
    ],
    skills: ["JavaScript", "CSS", "React", "Teaching", "Client Relations"]
  },
  {
    company: "HNG Internship",
    role: "Software Development Intern",
    period: "2021",
    icon: <GraduationCap className="text-lime-400" />,
    details: [
      "Collaborated with UI/UX designers to implement 10+ screens",
      "Participated in daily standups and code reviews",
      "Fixed 50+ bugs across various projects",
      "Contributed to open source documentation"
    ],
    skills: ["Teamwork", "Git", "Problem Solving", "Agile"]
  },
  {
    company: "LMS Startup",
    role: "Co-Founder & Lead Developer",
    period: "2023 - Present",
    icon: <Layers className="text-lime-400" />,
    details: [
      "Architected scalable learning platform from scratch",
      "Implemented JWT authentication and role-based access",
      "Optimized React performance reducing load time by 45%",
      "Integrated payment gateways for seamless transactions",
    ],
    skills: ["Startups", "System Design", "Payment Integration", "Leadership"]
  }
];

const ExperienceCard = ({ exp, isExpanded, onClick, index }: any) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative z-10">
        <button
          onClick={onClick}
          className="w-full p-6 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-6">
            <div className="p-3 bg-gray-800 rounded-full border border-lime-400/30">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-lime-400">{exp.role}</p>
              <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex flex-wrap gap-2">
              {exp.skills.slice(0, 3).map((skill: string, i: number) => (
                <span key={i} className="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">
                  {skill}
                </span>
              ))}
              {exp.skills.length > 3 && (
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full border border-gray-700">
                  +{exp.skills.length - 3}
                </span>
              )}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="ml-4 text-lime-400"
            >
              {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-6"
            >
              <div className="border-t border-gray-700 pt-6">
                <ul className="space-y-3">
                  {exp.details.map((detail: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-lime-400 mt-1">•</span> {detail}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 pt-4 border-t border-gray-700"
                >
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">TECHNOLOGIES USED:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill: string, i: number) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="bg-lime-900/30 text-lime-400 text-xs px-3 py-1 rounded-full border border-lime-400/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-lime-400"
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Professional <span className="text-lime-400">Experience</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-400 max-w-3xl mb-16"
        >
          My journey through tech roles and responsibilities, with measurable impact at each position.
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              isExpanded={expandedIndex === index}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Looking for my full resume?</h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-600 hover:bg-lime-500 text-white px-8 py-3 rounded-full font-medium shadow-lg"
          >
            Download Complete CV
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}