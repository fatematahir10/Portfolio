import React from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import { Section, SectionHeading, Reveal, CornerMarks } from "./ui/Blueprint";
import { awards, education } from "../data/resume";

const Credentials: React.FC = () => {
  return (
    <Section id="credentials">
      <SectionHeading
        num="04"
        label="Credentials"
        title="Recognition & education"
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="bp-panel group h-full transition-colors duration-300 hover:border-blueprint/40">
            <CornerMarks className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 border-b border-rule px-6 py-4">
              <FiAward className="text-blueprint" />
              <span className="bp-label">Awards</span>
            </div>
            <div className="divide-y divide-rule-soft">
              {awards.map((a) => (
                <div key={a.title} className="px-6 py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {a.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-label text-blueprint">
                      {a.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-ink-soft">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="bp-panel group h-full transition-colors duration-300 hover:border-blueprint/40">
            <CornerMarks className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 border-b border-rule px-6 py-4">
              <FiBookOpen className="text-blueprint" />
              <span className="bp-label">Education</span>
            </div>
            <div className="divide-y divide-rule-soft">
              {education.map((e) => (
                <div key={e.title} className="px-6 py-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {e.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[11px] uppercase tracking-label text-ink-faint">
                      {e.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-ink-soft">{e.detail}</p>
                  {e.note && (
                    <p className="mt-4 border-l-2 border-blueprint/30 pl-4 text-[13px] leading-relaxed text-ink-soft">
                      {e.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Credentials;
