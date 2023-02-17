/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    extend: {
      Colors: {
        skin: "#F4A88E",
        white: "#ffffff",
        grey: "#E4E4E4",
        black: "#000000",
      },
      fontSize: {
        base: "22px",
        lg: "28px",
        md: "50px",
        xl: "62px",
      },
    },
  },
  plugins: [],
};
