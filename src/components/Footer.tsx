// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="flex justify-center gap-8 flex-wrap">
        <a
          href="https://github.com/fatematahir10"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-pink-400 text-pink-300 hover:text-white hover:border-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/fatematahir"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-cyan-400 text-cyan-300 hover:text-white hover:border-white transition"
        >
          LinkedIn
        </a>
        <a
          href="https://www.upwork.com/freelancers/fatematahir"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-green-400 text-green-300 hover:text-white hover:border-white transition"
        >
          Upwork
        </a>
        <a
          href="https://stackoverflow.com/users/10075400/fatima-ali"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-purple-400 text-purple-300 hover:text-white hover:border-white transition"
        >
          Stack Overflow
        </a>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        © {new Date().getFullYear()} Fatima Ali. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
