/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      slate: {
        300: "#D6E2F0",
        500: "#68778D",
        900: "#1F3251",
      },
      white: {
        500: "#fff",
      },
    },
    extend: {
      screens: {
        xs: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      borderRadius: {
        xxl: "20px",
        b10: "10px",
      },
      fontSize: {
        f22: ["22px", "26px"],
      },
    },
  },
  plugins: [],
};
