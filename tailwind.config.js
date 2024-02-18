/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      spacing: {
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
