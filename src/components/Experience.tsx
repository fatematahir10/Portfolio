import React from "react";
import { Section, SectionHeading, Reveal, CornerMarks, Tech } from "./ui/Blueprint";
import { experience } from "../data/resume";

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <SectionHeading
        num="01"
        label="Experience"
        title="Seven years of shipping desktop software"
        description="A record of production systems and measured outcomes, from 3D plant-design tooling at Bentley Systems to automotive transmission diagnostics and real-time WPF dashboards."
      />

      <div className="relative">
        {/* vertical rail with measurement ticks */}
        <div
          className="absolute left-[7px] top-2 hidden h-full w-px bg-rule md:block"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-2 hidden h-full w-[15px] bp-ticks opacity-30 md:block"
          aria-hidden="true"
        />

        <ol className="space-y-6 md:pl-16">
          {experience.map((job, i) => (
            <li key={job.id} className="relative">
              {/* node on the rail */}
              <span
                className={`absolute -left-16 top-6 hidden h-[15px] w-[15px] items-center justify-center border md:flex ${
                  job.current
                    ? "border-blueprint bg-blueprint"
                    : "border-rule bg-panel"
                }`}
                aria-hidden="true"
              >
                {job.current && (
                  <span className="absolute h-[15px] w-[15px] animate-ping border border-blueprint/60" />
                )}
              </span>

              <Reveal delay={i * 0.05}>
                <article className="bp-panel group transition-colors duration-300 hover:border-blueprint/40">
                  <CornerMarks className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* title bar */}
                  <div className="flex flex-col gap-3 border-b border-rule px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                        {job.company}
                        <span className="ml-2 font-mono text-[11px] font-normal uppercase tracking-label text-ink-faint">
                          {job.location}
                        </span>
                      </h3>
                      <p className="mt-1 font-mono text-[13px] text-blueprint">{job.role}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-label">
                      <span className="text-ink-faint">{job.start}</span>
                      <span className="text-ink-faint/60">-</span>
                      <span
                        className={
                          job.current
                            ? "border border-blueprint/30 bg-blueprint/5 px-2 py-0.5 text-blueprint"
                            : "text-ink-faint"
                        }
                      >
                        {job.end}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-6">
                    <p className="max-w-3xl text-[15px] leading-relaxed text-ink-soft">
                      {job.summary}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {job.points.map((point, idx) => (
                        <li key={idx} className="flex items-baseline gap-4">
                          <span className="shrink-0 font-mono text-[10px] tabular-nums text-blueprint/50">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[14px] leading-relaxed text-ink-soft">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2 border-t border-rule-soft pt-5">
                      {job.tech.map((t) => (
                        <Tech key={t} label={t} />
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
