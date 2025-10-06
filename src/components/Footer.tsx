// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-16">
      <div className="flex justify-center gap-8 flex-wrap">
        <a
          href="https://github.com/fatematahir10"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-pink-400 text-pink-400 hover:text-black hover:border-black transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/fatematahir"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-cyan-400 text-cyan-400 hover:text-black hover:border-black transition"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/10075400/fatima-ali"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b-2 border-purple-400 text-purple-400 hover:text-black hover:border-black transition"
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
