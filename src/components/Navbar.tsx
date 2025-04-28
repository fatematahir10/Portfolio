import React from 'react';

const Navbar: React.FC = () => {
  return (
            <nav
            id="navbar"
            className="fixed top-0 left-0 w-full z-50 py-4 bg-black px-6 shadow-md"
        >
  
            <div className="flex justify-end gap-6">
                <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pink-400 text-pink-300 font-semibold rounded-xl hover:bg-pink-500 hover:text-black transition-all duration-300"
                >
                Download Resume
                </a>

                <a
                href="mailto:fatematahir96@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-400 text-green-300 font-semibold rounded-xl hover:bg-green-500 hover:text-black transition-all duration-300"
                >
                Let's Connect
                </a>
                <a
                href="https://www.upwork.com/freelancers/fatematahir?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-xl hover:bg-purple-500 hover:text-black transition-all duration-300"
                >
          View on Upwork
        </a>
            </div>
            </nav>
  );
};

export default Navbar;
