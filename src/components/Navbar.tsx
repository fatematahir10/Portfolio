import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { profile, sections } from "../data/resume";

const navItems = sections.filter((s) => s.id !== "index");

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("index");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section owns the viewport midpoint. A plain
  // position check beats IntersectionObserver here: sections vary wildly
  // in height, so intersection ratio picks the wrong one near the page end.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const midpoint = window.scrollY + window.innerHeight / 2;

      // Bottom of the page always belongs to the last section.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= midpoint) current = id;
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-rule bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      {/* top measurement strip */}
      <div className="h-1.5 w-full bp-ticks-x opacity-40" aria-hidden="true" />

      <div className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-3 lg:px-10">
        {/* Identity block */}
        <a href="#index" className="group flex items-center gap-3">
          <span className="relative block h-9 w-9 border border-rule bg-panel p-0.5">
            <img
              src="/logo.png"
              alt=""
              className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
            />
            <span className="absolute -right-1 -top-1 block h-2 w-2 rounded-full bg-signal animate-pulseDot" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight text-ink">
              {profile.name}
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-label text-ink-faint">
              Available for work
            </span>
          </span>
        </a>

        {/* Section index */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative px-3 py-2 font-mono text-[11px] uppercase tracking-label transition-colors duration-200 ${
                active === item.id
                  ? "text-blueprint"
                  : "text-ink-faint hover:text-ink"
              }`}
            >
              <span className="mr-1.5 opacity-50">{item.num}</span>
              {item.label}
              <span
                className={`absolute inset-x-2 -bottom-px h-px origin-left bg-blueprint transition-transform duration-300 ${
                  active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono text-[11px] uppercase tracking-label text-paper transition-colors duration-300 hover:border-blueprint hover:bg-blueprint sm:inline-flex"
          >
            <FiDownload className="text-xs" />
            Resume
          </a>

          <button
            className="border border-rule bg-panel p-2 text-lg text-ink lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile index */}
      {isOpen && (
        <div className="border-t border-rule bg-paper/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto grid max-w-shell grid-cols-2 gap-px bg-rule px-0 py-0">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="bg-paper px-5 py-4 font-mono text-[11px] uppercase tracking-label text-ink-soft transition-colors hover:text-blueprint"
              >
                <span className="mr-2 text-blueprint/60">{item.num}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="px-6 py-4">
            <a
              href={profile.resume}
              download
              className="flex w-full items-center justify-center gap-2 border border-ink bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-label text-paper"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
