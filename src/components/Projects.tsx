import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const projectList = [
    {
      category: "Desktop",
      title: "WPF Utilities Suite",
      tech: ["C#", "WPF", "Encryption", "WiX Toolset"],
      color: "pink",
      image: "wpf.png",
      text: "Designed and built a suite of WPF utilities with MVVM architecture, encryption modules, and multithreading for heavy data tasks. Deployed with WiX installer for enterprise use."
    },
    {
      category: "Desktop",
      title: "Legacy System Bug Fixing + Modernization",
      tech: ["C#", "C++/CLI", "SQLite", "Bentley OpenPlant Software"],
      color: "green",
      image: "legacy.png",
      text: "Revamped and maintained legacy desktop applications, fixing critical bugs and enhancing performance. Integrated C++/CLI modules for CAD interoperability and optimized SQLite database operations. I also worked on creating 3D graphics of parts used in software."
      },
    {
      category: "Desktop",
      title: "Ad Blocking Tool",
      tech: ["C#", ".NET Framework", "WinForms", "Window Services"],
      color: "pink",
      image: "adblocker.png",
      text: "Developed a multithreaded ad-blocking solution combining a desktop UI with a Windows Service for system-wide filtering and monitoring."
    },
    {
      category: "Web",
      title: "Tracking & Analytics Portal",
      tech: ["C#", "ASP.NET MVC", "Javascript", "SQL Server"],
      color: "purple",
      image: "tracking.png",
      text: "Engineered a secure ASP.NET MVC portal with authentication, real-time analytics dashboards, and AI-powered face recognition integration."
    },
    {
      category:"Desktop",
      title: "Face Recognition AI",
      tech: ["Python", "Dlib", "TensorFlow", "MTCNN"],
      color: "cyan",
      image: "facerecoginition.png",
      text: "Developed real-time face detection and recognition modules with deep learning, optimized for cross-platform performance."
    },
    {
    category: "Web",
    title: "Personal Portfolio Website",
    tech: ["React", "TypeScript", "TailwindCSS", ".NET"],
    color: "yellow",
    image: "portfolio.png",
    text: "A modern, interactive portfolio website built by me using React, TypeScript and TailwindCSS. It showcases my projects, animations, and professional journey with a clean and responsive design."
    }
  ];

let globalIndex = 0;

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl py-24 px-6 mx-auto relative"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">
        Projects
      </h2>
      {["Desktop", "Web"].map((category) => (
        <div key={category} className="mb-20">
          <h3 className="text-2xl font-bold text-gray-700 mb-10 text-center">
            {category} Applications
          </h3>

          <div className="flex flex-col gap-16">
            {projectList.filter((proj) => proj.category === category).map((proj) => {
              const isEven = globalIndex % 2 === 0;
              globalIndex++;
              return (
              <div
                key={proj.title}
                className={`flex flex-col md:flex-row items-center relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <motion.div
                  className={`flex-1 max-w-md border-2 border-${proj.color}-400 bg-white p-6 rounded-lg text-left hover:shadow-lg relative z-10 ${
                    isEven ? " md:-mr-12" : ""
                  }`}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <h4 className={`text-2xl font-semibold text-${proj.color}-400`}>
                    {proj.title}
                  </h4>

                  <div className="flex flex-wrap gap-2 mb-4 mt-4">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="border-2 border-gray-300 text-xs font-semibold px-3 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {proj.text}
                  </p>
                </motion.div>

                <motion.div
                  className={`flex max-w-lg relative z-0 ${
                    isEven ? "" : "md:-mr-12"
                  }`}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </motion.div>
              </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  );
};


export default Projects;
