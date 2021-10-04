module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: { min: "0px", max: "450px" },
        sm: { min: "450px", max: "640px" },
        md: { min: "640px", max: "1200px" },
      },
      backgroundImage: (theme) => ({
        "home-page": "url('/src/components/Home/background-image.svg')",
        "home-page-rectangle": "url('/src/components/Home/Rectangle.svg')",
      }),
      width: {
        "45%": "45%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
