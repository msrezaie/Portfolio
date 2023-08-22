const jwt = require("jsonwebtoken");

const protectAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken.user === "admin") {
      next();
    } else {
      res.status(401);
      throw new Error("invalid token, unauthorized access!");
    }
  } else {
    res.redirect("/auth");
  }
};

const redirectAdmin = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken && decodedToken.user === "admin") {
      res.redirect("/admin");
    } else {
      res.status(401);
      throw new Error("invalid token, unauthorized access!");
    }
  } else {
    next();
  }
};

module.exports = { protectAdmin, redirectAdmin };
