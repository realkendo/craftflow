/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandGray: "#2b2b2b",
        brandOrange: "#ff5a1f",
      },
    },
  },
  plugins: [],
};
