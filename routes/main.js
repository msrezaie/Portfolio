const express = require("express");

const router = express.Router();

const { getHome, postMessage } = require("../controllers/main-controller");

router.get("/", getHome);

router.post("/", postMessage);

module.exports = router;
