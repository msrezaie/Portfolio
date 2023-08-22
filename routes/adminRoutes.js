const express = require("express");
const router = express.Router();

const { protectAdmin } = require("../middleware/authHandler");
const { getAdmin } = require("../controllers/adminController");

router.route("/admin").get(protectAdmin, getAdmin);

module.exports = router;
