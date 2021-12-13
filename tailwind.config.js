module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        maroon: "#582C4D",
      }
    },
    screens: {
      tiny: "320px",
      // => @media (min-width: 640px) { ... }

      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      borderStyle: ["responsive", "hover"],
      borderWidth: ["responsive", "hover"]
    }
  },
  plugins: []
};
