import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const projectList = [
    {
      title: 'WPF Utilities Suite',
      tech: ['C#', 'WPF', 'AES Encryption'],
      color: 'pink',
      text: 'A suite of desktop tools designed for efficient data processing, encryption, file operations, and multithreading — featuring modern, responsive WPF UI components.'
    },
    {
      title: 'Tracking & Analytics Portal',
      tech: ['C#', 'ASP.NET MVC', 'SQL Server'],
      color: 'purple',
      text: 'A comprehensive web portal with security modules, analytics dashboards, and user tracking. Integrated facial recognition modules using AI for enhanced monitoring.'
    },
    {
      title: 'Legacy System Modernization',
      tech: ['C#', 'C++/CLI', 'SQLite'],
      color: 'green',
      text: 'Revamped and maintained a massive enterprise legacy system with 100+ interdependent modules. Ensured stability, improved performance, and implemented modernization strategies.'
    },
    {
      title: 'Face Recognition AI',
      tech: ['Python', 'Dlib', 'TensorFlow', 'MTCNN'],
      color: 'cyan',
      text: 'Developed real-time face detection and recognition modules with high accuracy using deep learning frameworks. Optimized for performance and cross-platform use.'
    },
    {
      title: 'Ad Blocking Tool',
      tech: ['C#', '.NET Framework', 'WinForms', 'Services'],
      color: 'pink',
      text: 'Created a multithreaded desktop application and Windows service to block ads system-wide. Includes a setup project, logging mechanisms, and a real-time dashboard.'
    },
    {
      title: 'Snap Sort App',
      tech: ['C#', 'WPF', 'SQLite'],
      color: 'purple',
      text: 'A powerful image sorting desktop application with drag-and-drop features, automatic file categorization, duplicate detection, and a modern MVVM architecture.'
    }
  ];
  return (
    <section
      id="projects"
      className="max-w-6xl py-24 px-6 mx-auto bg-black text-white text-center relative"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>

      {/* Arrow Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-cyan-400 text-black p-3 rounded-full hover:bg-cyan-500 z-10"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-400 text-black p-3 rounded-full hover:bg-cyan-500 z-10"
      >
        <FaArrowRight />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap mx-auto scrollbar-hide"
      >
        <div className="inline-flex px-10 gap-12">
          {projectList.map((proj) => (
            <div
              key={proj.title}
              className={`min-w-[300px] max-w-sm border-2 border-${proj.color}-400 p-6 rounded-xl text-left hover:shadow-lg transition-transform duration-300 bg-black`}
            >
              <h3
                className={`text-xl font-semibold text-${proj.color}-300 mb-2 text-wrap`}
              >
                {proj.title}
              </h3>
              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {proj.tech.map((tech) => (
                  <div
                    key={tech}
                    className="border border-white text-white text-wrap text-xs px-2 py-1 rounded-md"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <p className="text-sm text-wrap justify-normal">{proj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
