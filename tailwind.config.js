/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    borderRadius: {
      "primary-button": "5px",
      "tag-button": "17.5px",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    //fontweight 설정을 하더라도, overrride가능, 자주쓰는 값으로 설정하면됨.
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
    colors: {
      primary: "#1D2745",
      secondary: "#1DE5D4",
      tertiary: "#F52C50",
      white: "#FFFFFF",
      mono100: "#F1F1F1",
      mono200: "#BEBEBE",
      error: "#D01E1E",
      social: "#395997",
      "dark-opacity": "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: [],
};
