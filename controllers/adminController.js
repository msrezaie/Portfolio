const fs = require("fs").promises;
const Profile = require("../models/Profile");

const getAdminPage = async (req, res) => {
  const profile = await Profile.find();
  if (profile.length < 1) {
    res.render("admin", {
      profile: [
        {
          resumePath: "uploads/MSR-Resume.pdf",
        },
      ],
    });
  } else {
    res.render("admin", { profile });
  }
};

const updateProfile = async (req, res) => {
  if (req.file) {
    const profile = await Profile.find();
    if (profile.length < 1) {
      const newProfile = await Profile.create({ resumePath: req.file.path });
      console.log("profile entry added");
      res.status(201).json({ msg: "profile entry added", newProfile });
    } else {
      const updatedProfile = await Profile.findByIdAndUpdate(
        {
          _id: profile[0]._id,
        },
        { resumePath: req.file.path },
        { new: true }
      );
      await fs.unlink(profile[0].resumePath);
      console.log("profile updated");
      res.status(200).json({ msg: "profile updated", updatedProfile });
    }
  } else {
    res.redirect("/admin");
  }
};

module.exports = { getAdminPage, updateProfile };
