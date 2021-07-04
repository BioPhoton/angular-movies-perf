module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist/hub-movies",
    },
    upload: {
      target: "filesystem",
      outputDir: ".lighthouseci"
    },
  },
};
