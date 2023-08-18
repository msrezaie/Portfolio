const Message = require("../model/message");

const getHome = (req, res, next) => {
  res.render("index");
};

const postMessage = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const messageBody = req.body.messageBody;
  const message = Message({
    name: name,
    email: email,
    messageBody: messageBody,
  });
  message
    .save()
    .then(() => {
      console.log("Message from visitor Saved!");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getHome, postMessage };
