const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    roomSize: {
      type: Number,
      required: true,
    },

    picture: {
      type: String,
      required: true,
    },
    availabilityDate: {
      type: Date,
      required: true,
    },
    rentPerMonth: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^01[3-9]\d{8}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Bangladeshi Number`,
      },
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
