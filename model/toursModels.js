const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    required: [true, "a tour must have a price"],
    type: Number
  }
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
