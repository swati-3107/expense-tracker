const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "auth",
    required: true,
  },
});

module.exports = mongoose.model("master", masterSchema);
