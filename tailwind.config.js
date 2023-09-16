/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["inter"],
      gilroyNormal: ["gilroy-normal"],
      gilroyMedium: ["gilroy-medium"],
      gilroyBold: ["gilroy-bold"],
      konexy: ["konexyPersonal"],
    },
    container: {
      padding: "12px",
      screens: {
        xl: "1344px",
      },
    },
  },
  plugins: [],
};
