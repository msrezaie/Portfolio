const Message = require("../models/Message");
const Profile = require("../models/Profile");

const getHome = async (req, res) => {
  const profile = await Profile.find();
  if (profile.length < 1) {
    res.render("index", {
      profile: [
        {
          resumePath: "uploads/MSR-Resume.pdf",
        },
      ],
    });
  } else {
    res.render("index", { profile });
  }
};

const postMessage = async (req, res) => {
  await Message.create(req.body);
  console.log("Message from visitor Saved!");
  res.redirect("/");
};

module.exports = { getHome, postMessage };
