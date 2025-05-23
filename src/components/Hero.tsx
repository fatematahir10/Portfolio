// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen py-20 flex flex-col justify-center items-center text-center bg-black text-white px-6"
    >
      <h1 className="text-6xl md:text-8xl font-bold text-blue-400 mb-6">
        Hi, I'm <span className="text-cyan-500">Fatima Ali</span>
      </h1>

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        {["C# Developer", ".NET Expert", "WPF Developer"].map((item) => (
          <div key={item} className="border-2 border-white rounded-full px-4 py-2">
            <p className="text-sm font-semibold text-white">{item}</p>
          </div>
        ))}
      </div>

      <p className="text-lg max-w-6xl leading-relaxed text-gray-200">
      I’m a results-driven software developer with a strong foundation in C#, .NET, and WPF, specializing in building modern, efficient, and user-friendly desktop applications. With over two years of remote development experience, I’ve successfully designed and delivered scalable solutions using clean MVVM architecture, intuitive UI design, and performance optimization techniques. I thrive in creating practical tools that solve real-world problems. My approach combines clean code, maintainable architecture, and a passion for continuous learning. 
      </p>
    </section>
  );
};

export default Hero;
