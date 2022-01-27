const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const passport = require("passport");
const Saml2js = require("saml2js");
const passportHandler = require("./passportHandler");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "123",
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.get(
  "/login",
  passport.authenticate("saml", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.post(
  "/saml/callback",
  // null,
  passport.authenticate("saml", { failureRedirect: "/", failureFlash: false }),
  (req, res, next) => {
    const xmlResponse = req.body.SAMLResponse;
    const parser = new Saml2js(xmlResponse);
    req.samlUserObject = parser.toObject();
    console.log(req.samlUserObject, "user");
    res.send({ message: "Success", user: req.samlUserObject });
    next();
  }
);

app.listen(3000, () =>
  console.log(`App is running on http://localhost:3000/login`)
);
