const { Error } = require("mongoose");
const House = require("../models/House");

// get all House

const getAllHouse = async (req, res) => {
  try {
    const houses = await House.find({});
    return res.status(200).json(houses);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// get filtered house
//  filter by city, bedrooms, bathrooms, room size, availability, and rent per month (using a range selector).

const getSearchedHouse = async (req, res) => {
  try {
    const { city, bedroom } = req.body;
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// get individual house

const getIndividualHouse = async (req, res) => {
  try {
    const house = await House.find(req.params.id).populate(
      "owner",
      "-password"
    );
    if (!house) {
      throw new Error("No such house found with this id!");
    } else {
      return res.status(200).json(house);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// create a rental house

const addNewHouse = async (req, res) => {
  try {
    const newHouse = await House.create({ ...req.body, owner: req.user.id });
    return res.status(201).json(newHouse);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// update that rental house

const updateHouse = async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (house.owner !== rq.user.id) {
      throw new Error("You are not allowed to update other's house info!");
    } else {
      const updatedHouse = await House.findById(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json(updatedHouse);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// delete that rental house

const deleteHouse = async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (house.owner !== req.user.id) {
      throw new Error("You can't delete other's house info!");
    } else {
      await house.delete();
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllHouse,
  addNewHouse,
  getIndividualHouse,
  updateHouse,
  deleteHouse,
};
