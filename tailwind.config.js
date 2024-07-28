/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vanilla: "rgba(233, 216, 166, 1)",
      },
      width: {
        "90%": "90%",
        "250px": "250px",
        "450px": "450px",
      },
      margin: {
        "225px": "225px",
      },
      maxWidth: {
        "20%": "20%",
      },
      height: {
        "180px": "180px",
        "450px": "450px",
        "2px": "2px",
      },
    },
  },
  plugins: [],
};
