const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    resumePath: {
      type: String,
      default: "MSR-Resume",
    },
    // email: {
    //   type: String,
    //   default: "msr@email.com",
    // },
    // phone: {
    //   type: String,
    //   default: "804-",
    // },
    // linkedin: {
    //   type: String,
    //   default: "linkedin.",
    // },
    // github: {
    //   type: String,
    //   default: "github.",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
