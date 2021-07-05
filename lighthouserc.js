
module.exports = {
  ci: {
    collect: {
      staticDistDir: "dist/hub-movies",
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "http://localhost:9001",
      // token: process.env.LHCI_TOKEN, // "98298654-3bb3-46e3-96f2-58058d5d5edb" could also use LHCI_TOKEN variable instead
    },
  },
};
