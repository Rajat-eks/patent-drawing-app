/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // if your code is under src/
  ],
  theme: {
    extend: {
      colors: {
        red: "#c4161c",
        blue: "#083b95",       lightBlue: "#547cb9",
        brown: "#666666",
        customGreen: "#d2e6d7",
        customRed: "#d7788c",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
        lato: ["Lato"],
        header: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        zoomOut: {
          "100%": { transform: "scale(1)" },
          "0%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 5s ease-in-out infinite",
        zoomOut: "zoomOut 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
