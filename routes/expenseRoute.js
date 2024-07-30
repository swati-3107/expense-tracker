const {
  addExpense,
  getExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
  getAllMasters,
  getTotalAmount,
} = require("../controller/expensesController");

const router = require("express").Router();

router
  .post("/add", addExpense)
  .get("/get", getExpense)
  .get("/get-master", getAllMasters)
  .get("/get/:id", getExpenseById)
  .put("/update/:id", updateExpense)
  .delete("/delete/:id", deleteExpense)
  .get("/total", getTotalAmount);

module.exports = router;
