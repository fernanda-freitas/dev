/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      375: "375px",
      414: "414px",
      640: "640px",
      768: "768px",
      874: "874px",
      991: "991px",
      1024: "1024px",
      1140: "1140px",
      1280: "1280px",
      1366: "1366px",
      1440: "1440px",
      1536: "1536px",
      1680: "1680px",
      1920: "1920px",
      "media-hover": { raw: "(hover: hover) and (pointer: fine)" },
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#FFF",
    },
    extend: {
      spacing: {
        10: "1rem",
        20: "2rem",
        30: "3rem",
        40: "4rem",
        50: "5rem",
        60: "6rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        400: "400ms",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
