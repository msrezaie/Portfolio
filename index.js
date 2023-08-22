require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const mainRoutes = require("./routes/mainRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(mainRoutes);
app.use(adminRoutes);
app.use(authRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.URI);
    app.listen(PORT, console.log(`server listening in port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
