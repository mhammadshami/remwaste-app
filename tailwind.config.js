/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pageBackground: "#f9f9f9",
        primary: {
          DEFAULT: "#385172",
          dark: "#081130",
        },
        secondary: {
          DEFAULT: "#607ca5"
        }
      },
    },
  },
  plugins: [],
};
