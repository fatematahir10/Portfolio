import React from "react";
import TypingEffect from "./TypeEffect";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen  max-w-6xl mx-auto relative flex flex-col justify-center px-6 py-28 text-left">
      <h1 className="text-6xl md:text-8xl font-bold text-blue-400 mb-6">
        Hi, I'm <span className="text-cyan-500">Fatima Ali</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        I am a passionate{" "}
        <TypingEffect
          strings={["C# Developer", ".NET Expert", "React Learner"]}
          className="text-pink-600"
        />
      </h2>

      <p className="text-base text-gray-600 max-w-screen">
        I’m a results-driven software developer with a strong foundation in .NET C#, specializing in building modern, efficient, and user-friendly desktop and web applications. With over 7 years of professional experience, I have successfully designed and delivered scalable solutions using clean MVVM and MVC architectures, intuitive UI design, and performance optimization techniques. I thrive on creating practical tools that solve real-world problems, combining clean code, maintainable architecture, and attention to detail. Recently, I’ve been expanding my expertise into modern web development, actively working with React, TypeScript, and Tailwind CSS to build dynamic, responsive applications. Driven by a passion for continuous learning, I embrace new technologies and development practices, ensuring that the solutions I deliver are not only effective today but also adaptable for the future.
      </p>
    </section>
  );
};

export default Hero;
