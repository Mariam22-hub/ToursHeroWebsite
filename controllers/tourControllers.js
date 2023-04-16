const fs = require("fs");
const Tour = require("./../model/toursModels");

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

//middleware functions

// exports.checkID = (req, res, next, val) => {
//   console.log(`tour id: ${val}`);
//
//   // if (req.params.id * 1 > tours.length) {
//   res.status(404).json({
//     status: "failed",
//     message: "tour not found"
//     // });
//   });
// };

//////////////////////////////////////////////////

exports.getTours = async (req, res) => {

  try {
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: { tours }
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e
    });

  }

};

exports.getAtour = async (req, res) => {
  console.log(req.params);

  // const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id)

  try {
    const tour = await Tour.findById(req.params.id);
    //Tour.findOne({_id: req.params.id})

    res.status(200).json({
      status: "success",
      // results: tour.length,
      data: { tour }
    });
  } catch (e) {
    res.status(404).json({
      status: "fail",
      message: e
    });
  }
};

exports.createTour = async (req, res) => {
  console.log(req.body);

  const newTour = await Tour.create(req.body);

  try {
    res.status(201).json({
      status: "success",
      data: {
        tours: newTour
      }
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e
    });
  }


};

exports.updateTour = async (req, res) => {
  console.log(req.body);

  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(201).json({
      status: "success",
      data: {
        tour
      }
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e
    });
  }

};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e
    });
  }


};