/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  theme: {
    extend: {
      colors: {
        myPink1: "#E2BBE9",
        myPink2: "#E966A0",
      }
    },
  },

  plugins: [
    require('daisyui'),
  ],
}
