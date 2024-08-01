/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        btnGrey: "#EAEDF0",
        blackCol: '#16191D',
        greyCol: '#8E9297',
        backgroundCol: '#F0F3F7',
        btnColor: "#EAEDF0",
        mainBlue: "#388FF3",
        textCol: "#63676C",
        borderGrey: "#EAEDF0"
      },
      boxShadow: {
        category: "0px 4px 16px 0px rgba(0, 0, 0, 0.02)",
        "category-hover": "0px 4px 16px 0px rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        'inter': [' "Inter", "sans-serif" ']
      }
    },
  },
  plugins: [],
}