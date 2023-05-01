/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        "main-gray": "var(--main-gray)",
        "secondary-gray": "var(--secondary-gray)",
        "third-gray": "var(--third-gray)",
      },
    },
  },
  plugins: [],
};
