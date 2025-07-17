/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FE7743",
        dark: "#0f172a",
        secondary: "#64748b",
      },
      screens: {
        xl: "1320px",
      },
    },
  },
  plugins: [],
};
