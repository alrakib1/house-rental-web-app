const express = require("express");
const {
  getAllHouse,
  addNewHouse,
} = require("./../controllers/houseController");

const router = express.Router();

router.route("/").get(getAllHouse).post(addNewHouse);

router.route("/:id").get().put().delete();

module.exports = router;
