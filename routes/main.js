const express = require("express");

const router = express.Router();

const { getHome } = require("../controllers/main-controller");

router.get("/", getHome);

module.exports = router;
