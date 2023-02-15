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

      "text-light": "#CBCBCB",

      blue: {
        link: "#05CAEB",
        text: "#355560",
        sharp: "#0075FF",
        sky: "#84FBFF",
        dark: "#00316C",
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
        "team-card":
          "linear-gradient(180deg, #07FAFA 0%, #3CF5FF 0.01%, #B5FFFF 99.48%)",
        footer:
          "linear-gradient(180deg, rgba(56, 46, 46, 0.9) 0%, #000000 100%)",
        button:
          "linear-gradient(180deg, #00F0FF 0%, rgba(14, 87, 196, 0.79) 100%)",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        "header-height": "var(--header-height)",
      },
      boxShadow: {
        button: "4px 4px 0px #FFFFFF",
        "team-card": "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
