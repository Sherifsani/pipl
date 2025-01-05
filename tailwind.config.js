/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#d1c9ff",
        grey60: "#6d6d6d",
      },
    },
  },
  plugins: [daisyui],
};
