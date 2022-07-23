/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#17358B",
          secondary: "#54AFE6",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  plugins: [require("daisyui")],

};
