const generateToken = require("../util/generateToken");

const getAuthPage = (req, res, next) => {
  res.render("login");
};

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (username === process.env.UNAME && password === process.env.PASSWORD) {
    generateToken(res, username);
    res.redirect("/admin");
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
};

const logoff = (req, res, next) => {
  res.cookie(
    "jwt",
    {},
    {
      httpOnly: true,
      maxAge: new Date(0),
    }
  );
  res.status(200).json({ msg: "logged off!" });
};

module.exports = { login, logoff, getAuthPage };
