/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFBFC",
        panel: "#FFFFFF",
        ink: {
          DEFAULT: "#0A1424",
          soft: "#3D4C63",
          faint: "#7A8798",
        },
        rule: {
          DEFAULT: "#DCE3EC",
          soft: "#EDF1F6",
        },
        blueprint: {
          DEFAULT: "#0B5FFF",
          deep: "#0842B8",
          glow: "#4A8CFF",
        },
        signal: "#00B3A4",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        shell: "78rem",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" },
        },
      },
      animation: {
        scan: "scan 6s linear infinite",
        pulseDot: "pulseDot 2.4s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
