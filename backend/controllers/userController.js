const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find().select({ password: 0 });
    // res.send({success: true,data: allUsers})
    res.send("all users data will be here for admin");
  } catch (error) {
    throw new Error(error.message);
  }
};

// register user

const createNewUser = async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.email });
    if (isExisting) {
      throw new Error("Already such email is registered!");
    }

    if (!req.body.password) {
      throw new Error("Password is required!");
    }
    //
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      phone: req.body.phone,
      role: req.body.role,
    });

    const { password, ...others } = newUser._doc;
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });

    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const loginUser = async(req,res)=>{

}


// currently logged in user info
const getCurrentUser = async (req, res) => {
  res.send("will get the current user");
};

module.exports = { getAllUsers, createNewUser, getCurrentUser,loginUser };
