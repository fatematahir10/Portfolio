import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
      title: 'WPF Utilities Suite',
      tech: ['C#', 'WPF', 'Encryption', 'WiX Toolset'],
      color: 'pink',
      image: 'wpf.png',
      text: 'A suite of desktop tools designed for efficient data processing, encryption, file operations, and multithreading, featuring modern, responsive WPF UI components.'
    },
    {
      title: 'Tracking & Analytics Portal',
      tech: ['C#', 'ASP.NET MVC', 'SQL Server'],
      color: 'purple',
      image: 'tracking.png',
      text: 'A comprehensive web portal with security modules, analytics dashboards, and user tracking. Integrated facial recognition modules using AI for enhanced monitoring.'
    },
    {
      title: 'Legacy System Modernization',
      tech: ['C#', 'C++/CLI', 'SQLite'],
      color: 'green',
      image: 'legacy.png',
      text: 'Revamped and maintained a massive enterprise legacy system with 100+ interdependent modules. Ensured stability, improved performance, and implemented modernization strategies.'
    },
    {
      title: 'Face Recognition AI',
      tech: ['Python', 'Dlib', 'TensorFlow', 'MTCNN'],
      color: 'cyan',
      image: 'facerecoginition.png',
      text: 'Developed real-time face detection and recognition modules with high accuracy using deep learning frameworks. Optimized for performance and cross-platform use.'
    },
    {
      title: 'Ad Blocking Tool',
      tech: ['C#', '.NET Framework', 'WinForms', 'Window Services'],
      color: 'pink',
      image: 'adblocker.png',
      text: 'Created a multithreaded desktop application and Windows service to block ads system-wide. Includes a setup project, logging mechanisms, and a real-time dashboard.'
    },
    // {
    //   title: 'Snap Sort App',
    //   tech: ['C#', 'WPF', 'SQLite'],
    //   color: 'purple',
    //   image: 'snapsort.png',
    //   text: 'A powerful image sorting desktop application with drag-and-drop features, automatic file categorization, duplicate detection, and a modern MVVM architecture.'
    // }
  ];
  

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-4xl py-24 px-6 mx-auto relative"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-16 text-center">
        Projects
      </h2>

      <div className="flex flex-col gap-16">
        {projectList.map((proj, index) => (
          <div
            key={proj.title}
            className="flex flex-col md:flex-row items-center relative"
          >
            <motion.div
              className={`flex-1 max-w-md border-2 border-${proj.color}-400 bg-white p-6 rounded-xl text-left hover:shadow-lg relative z-10 md:-mr-12`}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3
                className={`text-2xl font-semibold text-${proj.color}-400`}
              >
                {proj.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border-2 border-black-400 text-xs px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-black-200">
                {proj.text}
              </p>
            </motion.div>

            <motion.div
              className="flex max-w-lg relative z-0"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
