const path = require("path");

const mongoose = require("mongoose");

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

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jqipsao.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(PORT, () => console.log(`Server running in port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
