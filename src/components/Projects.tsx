import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'SnapSortApp',
      color: 'cyan',
      tech: ['C#', 'WPF', 'SQLite'],
      description:
        'Image sorting app with drag-and-drop, WPF UI, and modern MVVM design.',
    },
    {
      title: 'WPF Applications',
      color: 'pink',
      tech: ['C#', 'WPF', 'AES-Encryption'],
      description:
        'Built efficient WPF tools using C#, threading, encryption & data processing.',
    },
    {
      title: 'Tracking Portal',
      color: 'purple',
      tech: ['C#', 'ASP.NET MVC'],
      description:
        'ASP.NET MVC app with AI face recognition and analytics modules.',
    },
    {
      title: 'Legacy System',
      color: 'green',
      tech: ['C#', 'C++/CLI', 'SQLite'],
      description:
        'A huge legacy system with 100+ modules, including data processing and reporting.',
    },
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
        <div className="inline-flex px-10 gap-14">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className={`min-w-[300px] max-w-sm border-2 border-${proj.color}-400 p-6 rounded-xl text-left hover:shadow-lg transition-transform duration-300 bg-black`}
            >
              <h3
                className={`text-xl font-semibold text-${proj.color}-300 mb-2`}
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
              <p className="text-sm text-wrap">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
