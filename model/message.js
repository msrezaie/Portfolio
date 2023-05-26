const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = Schema({
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
});

module.exports = mongoose.model("Message", messageSchema);
