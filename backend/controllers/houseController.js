const House = require("../models/House");

// get all House
const getAllHouse = async (req, res) => {
  
  res.send("will get all house from here");
};

const addNewHouse = async (req, res) => {
  res.send("will add new house here");
};

module.exports = { getAllHouse, addNewHouse };
