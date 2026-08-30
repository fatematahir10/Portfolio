import React from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import { Section, Reveal, CornerMarks } from "./ui/Blueprint";
import { profile } from "../data/resume";

const channels = [
  {
    id: "email",
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    id: "phone",
    icon: FiPhone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    id: "location",
    icon: FiMapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

const socials = [
  { id: "github", icon: FaGithub, label: "GitHub", href: profile.links.github },
  { id: "linkedin", icon: FaLinkedinIn, label: "LinkedIn", href: profile.links.linkedin },
  { id: "stackoverflow", icon: FaStackOverflow, label: "Stack Overflow", href: profile.links.stackoverflow },
];

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Reveal>
        <div className="bp-panel overflow-hidden">
          <CornerMarks />

          <div className="flex items-center gap-4 border-b border-rule px-6 py-4 lg:px-10">
            <span className="font-mono text-[11px] font-semibold tracking-label text-blueprint">
              05
            </span>
            <span className="bp-label">Contact</span>
            <span className="h-px flex-1 bg-rule" />
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-signal">
              <span className="block h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
              Open to work
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Pitch */}
            <div className="border-b border-rule px-6 py-12 lg:border-b-0 lg:border-r lg:px-10 lg:py-14">
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Let&rsquo;s build
                <br />
                something
                <span className="text-blueprint"> solid.</span>
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
                Available for .NET desktop work: new WPF products, legacy modernization,
                or performance rescue on an existing codebase. I reply to every message.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors duration-300 hover:border-blueprint hover:bg-blueprint"
                >
                  Send an email
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 border border-rule bg-paper px-6 py-3 font-mono text-[11px] uppercase tracking-label text-ink transition-colors duration-300 hover:border-blueprint hover:text-blueprint"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </div>

            {/* Directory */}
            <div className="divide-y divide-rule">
              {channels.map((c) => {
                const Icon = c.icon;
                const body = (
                  <div className="flex items-center gap-5 px-6 py-6 lg:px-10">
                    <Icon className="shrink-0 text-lg text-blueprint" />
                    <div className="min-w-0">
                      <span className="bp-label">{c.label}</span>
                      <p className="mt-1 truncate font-mono text-[14px] text-ink">{c.value}</p>
                    </div>
                    {c.href && (
                      <FiArrowUpRight className="ml-auto shrink-0 text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blueprint" />
                    )}
                  </div>
                );

                return c.href ? (
                  <a key={c.id} href={c.href} className="group block transition-colors duration-300 hover:bg-paper">
                    {body}
                  </a>
                ) : (
                  <div key={c.id} className="group">{body}</div>
                );
              })}

              {/* Social row */}
              <div className="grid grid-cols-3 divide-x divide-rule">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 px-4 py-7 transition-colors duration-300 hover:bg-paper"
                    >
                      <Icon className="text-lg text-ink-soft transition-colors duration-300 group-hover:text-blueprint" />
                      <span className="bp-label transition-colors duration-300 group-hover:text-blueprint">
                        {s.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="h-1.5 w-full bp-ticks-x opacity-40" aria-hidden="true" />
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
