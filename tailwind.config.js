/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        navbar: "#FAFAFC",
        content: "#F5F5F7",
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
          "::-webkit-scrollbar": { display: "none" },
          /* Hide scrollbar for Firefox */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
