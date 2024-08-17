/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#222831",
          "200": "#18181b",
        },
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eee",
        },
        darkcyan: "#008a91",
        dimgray: {
          "100": "#71717a",
          "200": "#566173",
        },
        lightseagreen: "#00adb5",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "fugaz-one": "'Fugaz One'",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "16xl": "35px",
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      "3xl": "22px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};