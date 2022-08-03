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
          "base-100": "#F7F7FB",
          info: "#60B7DC",

          success: "#35D4BC",

          warning: "#EEA64F",

          error: "#E66577",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
