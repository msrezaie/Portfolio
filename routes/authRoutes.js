const express = require("express");
const router = express.Router();

const { redirectAdmin } = require("../middleware/authHandler");
const { login, logoff, getAuthPage } = require("../controllers/authController");

router.route("/auth").get(redirectAdmin, getAuthPage).post(login);
router.post("/logout", logoff);

module.exports = router;
