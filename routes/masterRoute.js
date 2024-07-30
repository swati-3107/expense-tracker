const {
  addMaster,
  getMaster,
  getMasterById,
  updateMaster,
  deleteMaster,
} = require("../controller/masterController");

const router = require("express").Router();

router
  .post("/add", addMaster)
  .get("/get", getMaster)
  .get("/get/:id", getMasterById)
  .put("/update/:id", updateMaster)
  .delete("/delete/:id", deleteMaster);

module.exports = router;
