import React from "react";
import { profile } from "../data/resume";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-label text-ink-faint sm:flex-row lg:px-10">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span className="hidden sm:block">Designed &amp; built by Fatima Ali</span>

        <a
          href="#index"
          className="transition-colors duration-300 hover:text-blueprint"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
