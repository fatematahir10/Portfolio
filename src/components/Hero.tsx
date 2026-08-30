import React from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";
import TypingEffect from "./TypeEffect";
import { CornerMarks, Crosshair } from "./ui/Blueprint";
import { profile, stats } from "../data/resume";

const Hero: React.FC = () => {
  return (
    <section
      id="index"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-shell flex-col justify-center px-6 pb-20 pt-32 lg:px-10"
    >
      {/* drafting crosshairs anchored to the layout grid */}
      <Crosshair className="left-2 top-28 h-4 w-4 lg:left-6" />
      <Crosshair className="right-2 top-28 h-4 w-4 lg:right-6" />

      {/* Header rule */}
      <motion.div
        className="flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-mono text-[11px] font-semibold tracking-label text-blueprint">
          00
        </span>
        <span className="bp-label">Index</span>
        <span className="h-px flex-1 bg-rule" />
        <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-label text-ink-faint sm:flex">
          <FiMapPin className="text-[13px]" />
          {profile.location}
        </span>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left: identity */}
        <div className="lg:col-span-7">
          <motion.h1
            className="font-display text-[13vw] font-semibold leading-[0.88] tracking-tighter text-ink sm:text-7xl lg:text-[5.5rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Fatima
            <br />
            Ali<span className="text-blueprint">.</span>
          </motion.h1>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-10 bg-blueprint" />
            <h2 className="font-mono text-sm uppercase tracking-label text-ink-soft sm:text-base">
              <TypingEffect strings={profile.roles} className="text-blueprint" />
            </h2>
          </motion.div>

          <motion.p
            className="mt-8 max-w-xl text-[15px] leading-[1.75] text-ink-soft"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-[11px] uppercase tracking-label text-paper transition-colors duration-300 hover:border-blueprint hover:bg-blueprint"
            >
              View experience
              <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-rule bg-panel px-6 py-3 font-mono text-[11px] uppercase tracking-label text-ink transition-colors duration-300 hover:border-blueprint hover:text-blueprint"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Right: spec plate */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="bp-panel overflow-hidden">
            <CornerMarks />

            {/* plate title bar */}
            <div className="flex items-center justify-between border-b border-rule px-5 py-3">
              <span className="bp-label">Specification</span>
              <span className="font-mono text-[11px] text-blueprint">REV. 2026</span>
            </div>

            <dl className="grid grid-cols-2 gap-px bg-rule">
              {stats.map((s) => (
                <div key={s.label} className="bg-panel px-5 py-6">
                  <dt className="bp-label">{s.label}</dt>
                  <dd className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">
                    {s.value}
                    <span className="ml-0.5 text-xl text-blueprint">{s.unit}</span>
                  </dd>
                </div>
              ))}
            </dl>

            {/* core stack readout */}
            <div className="border-t border-rule px-5 py-5">
              <span className="bp-label">Core stack</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {["C#", ".NET Core", "WPF", "MVVM", "C++/CLI", "SQL Server"].map((t) => (
                  <span key={t} className="bp-chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-1.5 w-full bp-ticks-x opacity-40" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
