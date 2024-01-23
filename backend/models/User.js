const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      min: 6,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      validate: {
        validator: function (v) {
          return /^01[3-9]\d{8}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid Bangladeshi Number`,
      },
    },
    role: {
      type: String,
      enum: ["House Owner", "Renter"],
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
