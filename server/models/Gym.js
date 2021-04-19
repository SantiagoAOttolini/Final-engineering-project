const mongoose = require("mongoose");

const Gyms = mongoose.Schema(
  {
    photo:{
      type:String
    },
    name: {
      type: String,
    },
    adress: {
      type: String,
    },
    price: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const Gym = mongoose.model("Gym", Gyms);

module.exports = { Gym };
