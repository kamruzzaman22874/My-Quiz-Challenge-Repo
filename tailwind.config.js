/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#f4b0c9",
      
"secondary": "#8a36f7",
      
"accent": "#f7b3b2",
      
"neutral": "#1D2225",
      
"base-100": "#474649",
      
"info": "#9AB8E0",
      
"success": "#11695C",
      
"warning": "#F5B656",
      
"error": "#E03E43",
      },
    },
  ],
  plugins: [require("daisyui")],
}
