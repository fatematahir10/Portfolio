/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // text colors
    "text-cyan-400",
    "text-pink-400",
    "text-green-400",
    "text-yellow-400",
    "text-purple-400",
    
    // border colors
    "border-cyan-400",
    "border-pink-400",
    "border-green-400",
    "border-yellow-400",
    "border-purple-400",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
