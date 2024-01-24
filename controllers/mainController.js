const Profile = require("../models/Profile");
const sendGrid = require("@sendgrid/mail");

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
  try {
    const { name, email, messageBody } = req.body;
    sendGrid.setApiKey(process.env.SMTP_API_KEY);

    const emailTemplate = {
      to: process.env.SMTP_RECEIVER,
      from: process.env.SMTP_SENDER,
      subject: `Message from ${name} - (${email})`,
      text: messageBody,
    };

    await sendGrid.send(emailTemplate);
    console.log("email sent");
    res.redirect("/");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getHome, postMessage };
