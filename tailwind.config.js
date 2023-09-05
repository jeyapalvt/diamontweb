/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    fontSize: {
      esm: "0.500rem",
      msm: "0.630rem",
      sm: "0.750rem", // Existing sizes
      md: "0.900rem",
      xls: "1.3rem",
    },
    extend: {},
  },
  plugins: [],
};
