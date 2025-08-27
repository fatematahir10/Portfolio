// src/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen py-20 flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-6xl md:text-8xl font-bold text-blue-400 mb-6">
        Hi, I'm <span className="text-cyan-500">Fatima Ali</span>
      </h1>

      <div className="flex gap-4 flex-wrap justify-center mb-10">
        {["C# Developer", ".NET Expert", "Learning React"].map((item) => (
          <div key={item} className="border-2 border-black-400 rounded-md px-4 py-2">
            <p className="text-sm font-semibold">{item}</p>
          </div>
        ))}
      </div>

      <p className="text-base max-w-6xl leading-relaxed">
      I’m a results-driven software developer with a strong foundation in .NET C#, specializing in building modern, efficient, and user-friendly desktop and web applications. With over 7 years of professional experience, I have successfully designed and delivered scalable solutions using clean MVVM and MVC architectures, intuitive UI design, and performance optimization techniques.
      I thrive on creating practical tools that solve real-world problems, combining clean code, maintainable architecture, and attention to detail. Recently, I’ve been expanding my expertise into modern web development, actively working with React, TypeScript, and Tailwind CSS to build dynamic, responsive applications.
      Driven by a passion for continuous learning, I embrace new technologies and development practices, ensuring that the solutions I deliver are not only effective today but also adaptable for the future.
      </p>
    </section>
  );
};

export default Hero;
