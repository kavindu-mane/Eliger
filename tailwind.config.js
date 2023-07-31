/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-750": "#011C2B",
      },
      fontFamily: {
        noto: "'Noto Sans', 'sans-serif'",
        ABeeZee: "'ABeeZee', 'sans-serif'",
        Poppins: "'Poppins', 'sans-serif'",
      },
      keyframes: {
        upDown: {
          "0% , 50% , 100%": { transform: "translateY(0) rotate(45deg)" },
          "25%": { transform: "translateY(-20px) rotate(45deg)" },
          "75%": { transform: "translateY(20px) rotate(45deg)" },
        },
        go: {
          "0% , 50% , 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-30px)" },
          "75%": { transform: "translateX(30px)" },
        },
      },
      animation: {
        upDown: "upDown  5s linear infinite",
        go: "go 5s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
