import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bp-canvas relative min-h-screen">
      {/* Page-wide drafting frame: the two outer column rules */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden justify-center xl:flex" aria-hidden="true">
        <div className="h-full w-full max-w-shell border-x border-blueprint/[0.07]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
