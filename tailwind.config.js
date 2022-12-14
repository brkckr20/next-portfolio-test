/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#f8f8f8",
        secondaryBg: "#EEEEEE",
        tertiaryColor: "#F2F2F2",
        secondaryTextGray: "#767676",
        darkPrimary: "#222",
        darkSecondary: "#333333",
        darkTertiary: "#cccccc",
      }
    },
  },
  plugins: [],
}
