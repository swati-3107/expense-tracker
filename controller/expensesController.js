const asyncHandler = require("express-async-handler");
const Expenses = require("../model/Expenses");
const Master = require("../model/Master");

exports.getExpense = asyncHandler(async (req, res) => {
  const result = await Expenses.find({ user: req.user._id });
  res.status(200).json({ message: "Data Fetch Success", result });
});

exports.addExpense = asyncHandler(async (req, res) => {
  const exp = await Expenses.create({ ...req.body, user: req.user._id });
  res.status(201).json({ message: "Data Add Success", exp });
});

exports.getExpenseById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Expenses.findOne({ _id: id, user: req.user._id });
  if (!result) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.status(200).json({ message: "Data By Id Fetch Success", result });
});

exports.updateExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const exp = await Expenses.findOneAndUpdate(
    { _id: id, user: req.user._id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!exp) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.status(200).json({ message: "Data update Success", exp });
});

exports.deleteExpense = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const exp = await Expenses.findOneAndDelete({ _id: id, user: req.user._id });
  if (!exp) {
    return res.status(404).json({ message: "Expense not found" });
  }
  res.status(200).json({ message: "Data delete Success" });
});

exports.getAllMasters = asyncHandler(async (req, res) => {
  const masters = await Master.find({ user: req.user._id });
  res.status(200).json({ message: "Data Fetch Success", result: masters });
});

// exports.getTotalAmount = asyncHandler(async (req, res) => {
//   const pipeline = [
//     {
//       $match: { user: req.user._id }, // Filter by user
//     },
//     {
//       $addFields: {
//         year: { $year: { $toDate: "$date" } },
//       },
//     },
//     {
//       $group: {
//         _id: "$year",
//         totalAmount: { $sum: "$amount" },
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         year: "$_id",
//         totalAmount: 1,
//       },
//     },
//   ];

//   const result = await Expenses.aggregate(pipeline);
//   res.status(200).json({ message: "Total Amount by Year", result });
// });

// --------------------------------------------------------

exports.getTotalAmount = asyncHandler(async (req, res) => {
  const pipeline = [
    {
      $match: { user: req.user._id }, // Filter by user
    },
    {
      $addFields: {
        year: { $year: { $toDate: "$date" } },
        month: { $month: { $toDate: "$date" } },
      },
    },
    {
      $group: {
        _id: {
          year: "$year",
          month: "$month",
        },
        totalAmount: { $sum: "$amount" },
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id.year",
        month: "$_id.month",
        totalAmount: 1,
      },
    },
    {
      $sort: { year: 1, month: 1 }, // Sort by year and month
    },
  ];

  const result = await Expenses.aggregate(pipeline);
  res.status(200).json({ message: "Total Amount by Month", result });
});
