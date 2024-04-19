/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarColor: "#272829",
        textColor: "#FFF6E0",
        bodyColor: "#61677A"
      },
    },
  },
  plugins: [],
};
