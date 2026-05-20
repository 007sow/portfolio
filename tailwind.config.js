// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Red Hat Text"', "sans-serif"], // Make Red Hat Text the base font
        Tangerine: ["Tangerine", "cursive"],
        OldStandardTT: ["Old Standard TT", "serif"],
        satoshi: ["Satoshi", "sans-serif"],
        clash: ["Clash Grotesk", "sans-serif"],
      },
      screens: {
        miniPhones: "390px",
        Phones: "430px",
      },
      colors: {
        palatinate: "#51205B",
        wisteria: "#D4C8ED",
        palatinateDark: "#582560",
        palatinateLight: "#ded3df",
        pink: "#F8A9C0",
        green: "#193111",
        lightGreen: "#d1d6cf",
        lime: "#D9E3B9",
        brown: "#562615",
        darkBrown: "#4C411F",
        lightBrown: "#c9c6bc",
        yellow: "#FEEDAE",
        tangerine: "#F3A172",
        indigo: "#1C4161",
        lightIndigo: "#bbc6d0",
        blue: "#C6D8E5",
        lightblue: "",
        darkPrimaryText: "#EAEAEA",
        darkSecondaryText: "#B0B0B0",
        darkTileColor: "#1E1E1E",
        darkBorder: "#2E2E2E",
        darkBackground: "#121212",
        darkAccent: "#4A90E2",
      },
      animation: {
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-dot": "pulse-dot 1s alternate infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        'pulse-dot': {
          '0%': {
            background: 'rgba(255,255,255,0.3)',
            boxShadow: 'inset 0 0 10px 2px rgba(0,255,182,0.5), 0 0 5px 2px rgba(0,255,135,0.3)',
          },
          '100%': {
            background: 'rgba(255,255,255,1)',
            boxShadow: 'inset 0 0 10px 2px rgba(0,255,182,0.5), 0 0 15px 2px rgba(0,255,135,1)',
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
