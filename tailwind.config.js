module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "wave-pattern": "url(src/assets/img/wave-white.png)",
        "wave-pattern-dots": "url(src/assets/img/pattern-white-dots.png)",
        "pattern-characters-red":
          "url(src/assets/img/pattern-characters-red.png)",
        "character-mario": "url(src/assets/img/character-mario.png)",
        "wave-pink": "url(src/assets/img/wave-pink.png)",
        "yellow-dots": "url(src/assets/img/yellow-dots.png)",
      }),
      screens: {
        xsm: "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
