import React from 'react';

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-4">Projects</h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
            <div className="flex-1 border-2 border-cyan-400 p-4 rounded-xl text-left hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">SnapSortApp</h3>
                <div className="flex gap-3 mt-2">
                {["C#", "WPF", "SQLite"].map((tech) => (
                    <div key={tech} className="border border-white text-white text-xs p-1 rounded-md">
                    {tech}
                    </div>
                ))}
                </div>
                <p className="text-sm text-white py-2">
                Image sorting app with drag-and-drop, WPF UI, and modern MVVM design.
                </p>
            </div>

            <div className="flex-1 border-2 border-pink-400 p-4 rounded-xl text-left hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-pink-300 mb-2">WPF Applications</h3>
                <div className="flex gap-3 mt-2">
                {["C#", "WPF", "AES-Encryption"].map((tech) => (
                    <div key={tech} className="border border-white text-white text-xs p-1 rounded-md">
                    {tech}
                    </div>
                ))}
                </div>
                <p className="text-sm text-white py-2">
                Built efficient WPF tools using C#, threading, encryption & data processing.
                </p>
                
            </div>

            <div className="flex-1 border-2 border-purple-400 p-4 rounded-xl text-left hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Tracking Portal</h3>
                <div className="flex gap-3 mt-2">
                {["C#", "ASP.NET MVC"].map((tech) => (
                    <div key={tech} className="border border-white text-white text-xs p-1 rounded-md">
                    {tech}
                    </div>
                ))}
                </div>
                <p className="text-sm text-white py-2">
                ASP.NET MVC app with AI face recognition and analytics modules.
                </p>
            </div>

            <div className="flex-1 border-2 border-green-400 p-4 rounded-xl text-left hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-green-300 mb-2">Legacy System</h3>
                <div className="flex gap-3 mt-2">
                {["C#", "C++/CLI", "SQLite"].map((tech) => (
                    <div key={tech} className="border border-white text-white text-xs p-1 rounded-md">
                    {tech}
                    </div>
                ))}
                </div>
                <p className="text-sm text-white py-2">
                A huge legacy system with 100+ modules, including data processing and reporting.
                </p>
            </div>
        </div>
    </section>
  );
};

export default Projects;
