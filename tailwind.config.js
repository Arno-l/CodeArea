/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/styles/globals.css"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "",
        secondary: "",
      },
      textColor: {
        primary: "#10b981",
        secondary: "",
      },
      borderColor: {
        primary: "#10b981"
      },
      borderWidth: {
        "1": "1px"
      },
      caretColor: {
        primary: "#10b981"
      }
    },
  },
  plugins: [],
};
