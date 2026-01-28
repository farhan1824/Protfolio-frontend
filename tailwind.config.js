/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./Resume.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          400: "#F5BD4D",
          500: "#F89222",
        },
      },
    },
  },
  plugins: [],
};
