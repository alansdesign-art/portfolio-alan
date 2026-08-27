/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        lime: "#D9FD18",
        "text-primary": "#191F1A",
        "gray-text": "#C9C9C9",
      },
      fontFamily: {
        display: ['"Funnel Display"', "sans-serif"],
        body: ["Mulish", "sans-serif"],
      },
    },
  },
  plugins: [],
};
