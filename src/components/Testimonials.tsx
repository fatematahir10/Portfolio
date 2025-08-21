// src/components/Testimonials.tsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">Testimonials</h2>
      <div className="space-y-8 max-w-6xl mx-auto relative">

        {/* Testimonial 1 */}
        <div className="border-2 border-cyan-400 p-6 rounded-lg relative">
          <p className="text-lg">
            "Fatima worked on WPF desktop applications for our company. She did a great job and worked on the projects in a very steady and reliable way, not getting tired of doing long-running projects and getting some tricky code done as well. Fatima is also a great communicator, and easy and fun to work with! Thanks, Fatima!"
          </p>
          <div className="mt-4 relative">
            <span className="block text-cyan-300 font-semibold">– Long-term client</span>
            <a
              href="https://www.upwork.com/freelancers/fatematahir?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 top-1 text-cyan-300 hover:text-black transition"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border-2 border-pink-400 p-6 rounded-lg relative">
          <p className="text-lg">
            "Like said in the feedback before: great work, thanks, Fatima!"
          </p>
          <div className="mt-4 relative">
            <span className="block text-pink-300 font-semibold">– Long-term client</span>
            <a
              href="https://www.upwork.com/freelancers/fatematahir?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-0 top-1 text-pink-300 hover:text-black transition"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
