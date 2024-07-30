const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tags: [tagSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "auth",
    required: true,
  },
});

module.exports = mongoose.model("expense", expenseSchema);
