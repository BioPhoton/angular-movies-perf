module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist/hub-movies",
    },
    upload: {
      target: "temporary-public-storage",
      // target: "filesystem",
      // outputDir: ".lighthouseci"
    },
  },
};
