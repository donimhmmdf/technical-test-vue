/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "",
        second: "",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
