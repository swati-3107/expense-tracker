const asyncHandler = require("express-async-handler");
const Master = require("../model/Master");

// exports.getMaster = asyncHandler(async (req, res) => {
//   const result = await Master.find();
//   res.status(200).json({ message: "Data Fetch Success", result });
// });
// exports.addMaster = asyncHandler(async (req, res) => {
//   console.log(req.body);
//   console.log(req.user._id);
//   const exp = await Master.create(req.body);
//   res.status(201).json({ message: "Data Add Success", exp });
// });

// exports.getMasterById = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const result = await Master.findById(id);
//   res.status(200).json({ message: "Data By Id Fetch Success", result });
// });

// exports.updateMaster = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   await Master.findByIdAndUpdate(id, req.body, { runValidators: true });
//   res.status(200).json({ message: "Data update Success" });
// });

// exports.deleteMaster = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   await Master.findByIdAndDelete(id);
//   res.status(200).json({ message: "Data delete Success" });
// });

// -----------------------------------------------------
exports.getMaster = asyncHandler(async (req, res) => {
  const result = await Master.find({ user: req.user._id });
  res.status(200).json({ message: "Data Fetch Success", result });
});

exports.addMaster = asyncHandler(async (req, res) => {
  const exp = await Master.create({ ...req.body, user: req.user._id });
  res.status(201).json({ message: "Data Add Success", exp });
});

exports.getMasterById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Master.findOne({ _id: id, user: req.user._id });
  if (!result) {
    return res.status(404).json({ message: "Master record not found" });
  }
  res.status(200).json({ message: "Data By Id Fetch Success", result });
});

exports.updateMaster = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Master.findOneAndUpdate(
    { _id: id, user: req.user._id },
    req.body,
    { runValidators: true, new: true }
  );
  if (!result) {
    return res
      .status(404)
      .json({ message: "Master record not found or not authorized" });
  }
  res.status(200).json({ message: "Data update Success", result });
});

exports.deleteMaster = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const result = await Master.findOneAndDelete({ _id: id, user: req.user._id });
  if (!result) {
    return res
      .status(404)
      .json({ message: "Master record not found or not authorized" });
  }
  res.status(200).json({ message: "Data delete Success" });
});
