const passport = require("passport");
const passportSaml = require("passport-saml");
const fs = require("fs");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
// console.log(fs.readFileSync("./onelogin.pem", "utf-8"));
const strategy = new passportSaml.Strategy(
  {
    // Auth0 Working
    // entryPoint:
    //   "https://dev-uhfpobwh.us.auth0.com/samlp/xD7yTV8eAlZM7gTGPq4PBgaMSb266QFo",
    // issuer: "urn:dev-uhfpobwh.us.auth0.com",
    // callbackUrl: "http://localhost:3000/saml/callback",
    // // signatureAlgorithm: "sha256",
    // cert: fs.readFileSync("./dev-uhfpobwh.pem", "utf-8"),
    // path: "/saml/callback",
    // Azure Working
    // callbackUrl: "https://bfc3-43-241-194-252.ngrok.io/saml/callback",
    // issuer: "https://samltoolkit.azurewebsites.net",
    // entryPoint:
    //   "https://login.microsoftonline.com/970e4e65-9876-4857-809b-2634ceac0bfa/saml2",
    // cert: "MIIC8DCCAdigAwIBAgIQYr2FsKobboVCwwrFidhJVTANBgkqhkiG9w0BAQsFADA0MTIwMAYDVQQDEylNaWNyb3NvZnQgQXp1cmUgRmVkZXJhdGVkIFNTTyBDZXJ0aWZpY2F0ZTAeFw0yMjAxMjQxMzIxMDZaFw0yNTAxMjQxMzIxMDZaMDQxMjAwBgNVBAMTKU1pY3Jvc29mdCBBenVyZSBGZWRlcmF0ZWQgU1NPIENlcnRpZmljYXRlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2vjW7MFj+Sy/sYH3j7ZKMBn2CfWFmUBTpq/wyK6dnXPdvhz76sOw0jJbiSZG/o9YUxK09Wa7OBLDdkwJ9DzgEEB+ENjyZm4umFKPI50b48KaZqH3PNZAu1ajBpnDwlyN/jWT9S0DqUvbF+Dqh0bX24qjC2rJ4B9DKop+KY1lQlOsv2MWI4ox0HHB1ysnMR1SemkulRIlzQaMnARzzK57nOOrw+i5k/9DZULK7Lqj03Ids07zDbHA5UVRGskq8Zd3qflwA4/MVQaJdhkunW92PUxH7zmvCJHMe2pHY/r/vwo1ik9rIQd2M/JKFB814u+QK204LiiP4PkMmcRpALBmDQIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQDCvjjeXMfjBFbZSw0MVoK9TFioLxsTLK/GZlb6aNnsUoJU41eLy2ocQlqqOG5kObygoHJghhl9W00pNqYruBjMTKBWSvmmZKREI62ipBlqkzD0DvoNAmiD/LjnkRVI42cHe4ZWxwGmSaSKVDbnIWF8xxQH04J3N84kfy40OXLj1KULHs3/4Jw0JgwxsNFKuEYCb+bctM9ipxtVJOa4mnh1YAN9sli6Spn+gGdeUHRuSxW+z0pzGifl3h/a8117/dXuxAUX4Co6+ljmgYBvBPReSYth/JX2l8rWE4DPxiNCez3tCUPr/mD/9RXzF+HFRlOpgfpfJYeK6ErGpDZUoiUQ",
  },
  (profile, done) => {
    console.log(profile);
    done(null, profile);
  }
);

passport.use(strategy);

module.exports = passport;
