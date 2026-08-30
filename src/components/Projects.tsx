import React from "react";
import { Section, SectionHeading, Reveal, CornerMarks, Tech } from "./ui/Blueprint";
import { projects } from "../data/resume";

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <SectionHeading
        num="02"
        label="Projects"
        title="Selected work"
        description="Desktop applications and systems built end to end: architecture, interface, performance, and deployment."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((proj, i) => (
          <Reveal key={proj.id} delay={i * 0.06}>
            <article className="bp-panel group flex h-full flex-col transition-colors duration-300 hover:border-blueprint/40">
              <CornerMarks className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* plate header */}
              <div className="flex items-center justify-between border-b border-rule px-5 py-3">
                <span className="font-mono text-[11px] font-semibold tracking-label text-blueprint">
                  {proj.index}
                </span>
                <span className="bp-label">{proj.meta}</span>
              </div>

              {/* drawing area */}
              <div className="relative overflow-hidden border-b border-rule bg-paper">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* scanning highlight on hover */}
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blueprint/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-6">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-blueprint">
                  {proj.title}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft">
                  {proj.text}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-rule-soft pt-5">
                  {proj.tech.map((t) => (
                    <Tech key={t} label={t} />
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
