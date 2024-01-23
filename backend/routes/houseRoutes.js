const express = require("express");
const {
  getAllHouse,
  addNewHouse,
  getIndividualHouse,
  updateHouse,
  deleteHouse,
} = require("./../controllers/houseController");

const verifyToken = require("../middleware/verifytoken");

const router = express.Router();

router.route("/").get(getAllHouse).post(verifyToken, addNewHouse);

router.route("/search").get();
router
  .route("/:id")
  .get(getIndividualHouse)
  .patch(verifyToken, updateHouse)
  .delete(verifyToken, deleteHouse);

module.exports = router;
