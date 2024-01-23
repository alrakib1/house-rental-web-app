require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/mongodbConnection");
const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

connectDb();

app.get("/", (req, res) => {
  res.status(200).send("house rental server running");
});

app.use("/api/v1", userRouter);

module.exports = app;
