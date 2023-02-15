/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: "'Poppins', sans-serif",
      "open-sans": "'Open Sans', sans-serif",
      huglove: "'huglove', sans-serif",
      marsmelloe: "'marsmelloe', sans-serif",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "#FFDD84",
      "primary-2": "#FFE074",
      brown: "#994B1F",

      blue: {
        link: "#05CAEB",
        text: "#355560",
      },

      purple: {
        1: "#A3A4CA",
      },

      // SOCIALS
      twitter: "#03A9F4",
    },
    extend: {
      backgroundImage: {
        header: "linear-gradient(180deg, #000000 0%, #4F4F4F 100%)",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        "header-height": "var(--header-height)",
      },
      boxShadow: {
        button: "4px 4px 0px #FFFFFF",
      },
    },
  },
  plugins: [],
};
