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
        bgDark: "#050f1a",
        bgLight: "#eff5f5",
        fontLightTheme: "#393e46",
      },
    },
  },
  plugins: ["flowbite/plugin"],
};
