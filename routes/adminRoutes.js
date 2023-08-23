const express = require("express");
const router = express.Router();
const { protectAdmin } = require("../middleware/authHandler");
const {
  getAdminPage,
  updateProfile,
} = require("../controllers/adminController");
const { multer, fileStorage } = require("../util/fileUpload");

router.route("/").get(protectAdmin, getAdminPage);
router.post(
  "/profile-update",
  multer({ storage: fileStorage }).single("resume"),
  updateProfile
);

module.exports = router;
