import React from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Shared blueprint primitives. Every section is drawn from these so
 * the whole page reads as one technical drawing.
 * ------------------------------------------------------------------ */

/** Corner registration marks, like the crop marks on a plotted drawing. */
export const CornerMarks: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
    <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-blueprint/60" />
    <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-blueprint/60" />
    <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-blueprint/60" />
    <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-blueprint/60" />
  </div>
);

/** Small crosshair used at grid intersections. */
export const Crosshair: React.FC<{ className?: string }> = ({ className = "" }) => (
  <span className={`pointer-events-none absolute ${className}`} aria-hidden="true">
    <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-blueprint/40" />
    <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-blueprint/40" />
  </span>
);

/** Scroll-triggered reveal with a consistent easing curve. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 18, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "240px 0px 240px 0px" }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/** Numbered section header with the long measuring rule. */
export const SectionHeading: React.FC<{
  num: string;
  label: string;
  title: string;
  description?: string;
}> = ({ num, label, title, description }) => (
  <Reveal>
    <div className="mb-14">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] font-semibold tracking-label text-blueprint">
          {num}
        </span>
        <span className="bp-label">{label}</span>
        <span className="h-px flex-1 bg-rule" />
        <span className="hidden h-2 w-24 bp-ticks-x opacity-50 sm:block" />
      </div>

      <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  </Reveal>
);

/** Section shell: consistent rhythm + the vertical index rail. */
export const Section: React.FC<{
  id: string;
  children: React.ReactNode;
  className?: string;
}> = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`relative mx-auto w-full max-w-shell scroll-mt-24 px-6 py-24 sm:py-28 lg:px-10 ${className}`}
  >
    {children}
  </section>
);

/** Monospace technology tag. */
export const Tech: React.FC<{ label: string }> = ({ label }) => (
  <span className="bp-chip">{label}</span>
);
