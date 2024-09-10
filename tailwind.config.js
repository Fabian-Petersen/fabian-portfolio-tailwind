/** @type {import('tailwindcss').Config} */
// import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {},
      fontFamily: { greatVibes: ["Great Vibes", "cursive"] },
      colors: {
        primaryColor: "#e43f5a",
        //show priamry color #e43f5a as rgba(228, 63, 90, 1) and rgba(228, 63, 90, 0.5)
        bgDark: "#050f1a",
        bgLight: "#eff5f5",
        fontLightTheme: "#393e46",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
