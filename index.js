const path = require("path");

require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const mainRoutes = require("./routes/main");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
