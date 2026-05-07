module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🔥 opcional pero PRO: futura tipografía o colores de marca
      colors: {
        brand: "#a855f7",
      },
    },
  },
  plugins: [],
};