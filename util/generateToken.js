const jwt = require("jsonwebtoken");

const generateToken = (res, user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secrue: process.env.NODE_ENV === "production",
    sameSite: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
};

module.exports = generateToken;
