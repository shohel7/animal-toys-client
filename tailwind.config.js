/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
