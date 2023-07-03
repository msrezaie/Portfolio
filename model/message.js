const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  messageBody: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("Message", messageSchema);
