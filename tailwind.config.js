/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        BackgroundColor: "hsl(180, 52%, 96%)",
        FilterColor: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
