const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  ratingsAvg: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  duration: {
    type: Number,
    required: [true, "A tour must have a duration"]
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A tour must have a maximum group size"]
  },
  difficulty: {
    type: String,
    required: [true, "A tour must have a difficulty"]
  },
  price: {
    required: [true, "a tour must have a price"],
    type: Number
  },

  priceDiscount: Number,

  summary: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: true
  },

  images: [String],

  createdAt: {
    type: Date,
    default: Date.now()
  },

  startDates: [Date]

});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
