module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        137: "137px",
        11.59: "11.59px",
        buttonHeader: "38px",
      },
      width: {
        429: "429px",
        21.35: "21.35px",
        buttonHeader: "37px",
        336: "336px",
      },
      backgroundImage: {
        mapa: "url('/img/mapa.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      boxShadow: {
        custom: "0px 3px 6px #00000029",
      },
      borderRadius: {
        customHeader: "3px 3px 63px 3px",
      },
    },
  },
  plugins: [],
};
