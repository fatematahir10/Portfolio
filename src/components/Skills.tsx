import React from "react";
import { Section, SectionHeading, Reveal } from "./ui/Blueprint";
import { skills } from "../data/resume";

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <SectionHeading
        num="03"
        label="Skills"
        title="Toolset"
        description="The stack I reach for daily, grouped the way I actually use it."
      />

      <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.05} className="bg-panel">
            <div className="h-full px-6 py-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-semibold text-blueprint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="bp-label !text-ink">{group.label}</h3>
                <span className="h-px flex-1 bg-rule" />
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-rule bg-paper px-3 py-1.5 font-mono text-[12px] text-ink-soft transition-colors duration-200 hover:border-blueprint/40 hover:text-blueprint"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
