const express = require("express");
const { getHome, postMessage } = require("../controllers/mainController");
const router = express.Router();

router.get("/", getHome);
router.post("/", postMessage);

module.exports = router;
