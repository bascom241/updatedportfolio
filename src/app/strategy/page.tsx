"use client";
import { motion } from "framer-motion";
import icon1 from '../../../public/l1.png';
import icon2 from '../../../public/l2.png';
import icon3 from '../../../public/l3.png';
import icon4 from '../../../public/l4.png';
import icon5 from '../../../public/l6.png';
import Image from "next/image";
import { ClipboardList, Code, Cpu, Database, Figma, GitMerge, Server, Shield, TestTube2 } from "lucide-react";
import Link from "next/link";

const developmentPhases = [
  {
    title: "Discovery & Planning",
    icon: <ClipboardList className="text-blue-400" size={24} />,
    activities:[
      "Collaborated with stakeholders to gather and analyze project requirements",
      "Assessed technical feasibility to align solutions with business objectives",
      "Contributed to system architecture through clear and structured diagramming",
      "Participated in tech stack selection based on scalability and team expertise",
      "Estimated project timelines to support effective planning and delivery"
    ]
    ,
    deliverables: ["Project scope document", "System architecture", "Tech specification"]
  },
  {
    title: "UI/UX Design",
    icon: <Figma className="text-purple-400" size={24} />,
    activities:[
      "Mapped user flows to align design decisions with user behavior and business goals",
      "Created wireframes and interactive prototypes to validate UI concepts early",
      "Developed and maintained design systems for consistency across components",
      "Reviewed designs for accessibility to ensure inclusive user experiences",
      "Facilitated user testing sessions to gather feedback and improve usability"
    ]
    ,
    deliverables: ["High-fidelity mockups", "Style guide", "Interactive prototypes"]
  },
  {
    title: "Development Sprint",
    icon: <Code className="text-green-400" size={24} />,
    activities:[
      "Built atomic and reusable components to ensure scalable frontend architecture",
      "Implemented robust API endpoints for seamless client-server communication",
      "Designed efficient database models tailored to project requirements",
      "Integrated custom middleware to handle authentication and request processing",
      "Conducted code reviews to maintain clean, consistent, and high-quality codebase"
    ]
    ,
    deliverables: ["Feature modules", "API documentation", "Unit test coverage"]
  },
  {
    title: "Quality Assurance",
    icon: <TestTube2 className="text-yellow-400" size={24} />,
    activities:[
      "Learning automated testing frameworks and writing basic test cases",
      "Exploring tools for performance benchmarking in web applications",
      "Studying security vulnerability scanning techniques and best practices",
      "Practicing cross-browser testing to ensure consistent user experience",
      "Gaining experience in user acceptance testing through project feedback sessions"
    ]
    ,
    deliverables: ["Test reports", "Performance metrics", "Security audit"]
  },
  {
    title: "Deployment & Maintenance",
    icon: <Server className="text-red-400" size={24} />,
    activities: [
      "Currently learning CI/CD pipeline setup through hands-on practice and project simulations",
      "Gaining foundational experience in infrastructure provisioning and cloud environments",
      "Exploring tools and techniques for monitoring implementation in web applications",
      "Practicing zero-downtime deployment strategies in development environments",
      "Studying incident response planning to understand system reliability and uptime management"
    ]
    ,
    deliverables: ["Production environment", "Monitoring dashboard", "Maintenance docs"]
  }
];

const technicalExpertise = [
  {
    category: "Frontend Architecture",
    icon: <Cpu className="text-blue-500" />,
    skills: [
      "Component-based design",
      "State management (Redux/Context)",
      "Performance optimization",
      "SSR/SSG implementation",
      "Micro-frontends"
    ]
  },
  {
    category: "Backend Systems",
    icon: <Database className="text-green-500" />,
    skills: [
      "RESTful API design",
      "Authentication strategies",
      "Database optimization",
      "Caching mechanisms",
      "Websocket integration"
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: <GitMerge className="text-purple-500" />,
    skills: [
      "Containerization (Docker)",
      "Kubernetes orchestration",
      "AWS/GCP deployment",
      "Infrastructure as Code",
      "CI/CD pipelines"
    ]
  },
  {
    category: "Security",
    icon: <Shield className="text-yellow-500" />,
    skills: [
      "OWASP compliance",
      "Data encryption",
      "Rate limiting",
      "CORS policies",
      "Security headers"
    ]
  }
];

const Strategy = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 md:px-12 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      {/* 🚀 Hero Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            MERN Stack Development Framework
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A systematic approach to building scalable, secure, and high-performance web applications
          </p>
        </motion.div>

        {/* 🛠️ Development Methodology */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <ClipboardList className="text-blue-400" /> My Development Methodology
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalExpertise.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  {area.icon}
                  <h3 className="text-xl font-semibold">{area.category}</h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span> {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 📈 Development Lifecycle */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            End-to-End Development Lifecycle
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 md:left-1/2 md:-ml-1"></div>
            
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                <div className={`md:w-5/12 p-6 rounded-xl bg-gray-800/70 border border-gray-700 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-gray-700">
                      {phase.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Activities:</h4>
                    <ul className="space-y-1 text-sm">
                      {phase.activities.map((activity, i) => (
                        <li key={i} className="text-gray-300">• {activity}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((item, i) => (
                        <span key={i} className="bg-gray-700/50 text-xs px-3 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 💻 Tech Stack */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">
            Core Technology Stack
          </h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Image src={icon1} alt="MongoDB" width={80} height={80} className="mb-3" />
              <span className="text-gray-300">MongoDB</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Image src={icon2} alt="Express" width={80} height={80} className="mb-3" />
              <span className="text-gray-300">Express</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Image src={icon3} alt="React" width={80} height={80} className="mb-3" />
              <span className="text-gray-300">React</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Image src={icon4} alt="Node.js" width={80} height={80} className="mb-3" />
              <span className="text-gray-300">Node.js</span>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center"
            >
              <Image src={icon5} alt="Next.js" width={80} height={80} className="mb-3" />
              <span className="text-gray-300">Next.js</span>
            </motion.div>
          </motion.div>
          
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gray-400 mb-6">
              Plus extensive experience with complementary technologies like TypeScript, GraphQL, Docker, 
              AWS services, and testing frameworks.
            </p>

            <Link href="https://github.com/bascom241/">
           
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Code Base
            </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* 📞 CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how my MERN stack expertise can bring your project to life with clean architecture and robust solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
       
           
            <motion.button
           onClick={() => window.location.href = '/#contact'}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
       
            {/* <motion.button
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full font-medium shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button> */}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Strategy;