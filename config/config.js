module.exports = {
  development: {
    app: {
      name: "NN",
      port: 3000,
    },
    passport: {
      strategy: "saml",
      saml: {
        path: "",
        entryPoint: "",
        issuer: "",
        cert: "",
      },
    },
  },
};
