import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto relative">
        <div className="relative w-12 h-12">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-full h-full rounded-full object-cover" 
          />
          <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full"></span>
          <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
        </div>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6">
          <a
            href="/Resume.pdf"
            download
            className="px-4 py-2 border-2 text-sm border-pink-400 text-pink-400 font-semibold rounded-md hover:bg-pink-500 hover:text-black transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href="mailto:fatematahir96@example.com"
            className="px-4 py-2 border-2 text-sm border-green-400 text-green-400 font-semibold rounded-md hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-6 sm:hidden">
          <a
            href="/Resume.pdf"
            download
            className="px-4 py-2 border-2 text-sm border-pink-400 text-pink-400 font-semibold rounded-md hover:bg-pink-500 hover:text-black transition-all duration-300 w-3/4 text-center"
          >
            Download Resume
          </a>
          <a
            href="mailto:fatematahir96@example.com"
            className="px-4 py-2 border-2 text-sm border-green-400 text-green-400 font-semibold rounded-md hover:bg-green-500 hover:text-black transition-all duration-300 w-3/4 text-center"
          >
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
