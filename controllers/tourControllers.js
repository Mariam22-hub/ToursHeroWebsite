const fs = require("fs");
const Tour = require("./../model/toursModels");

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

//middleware functions

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: "failed",
      message: "no data found"
    });
  }

  next();
};

//////////////////////////////////////////////////

exports.getTours = (req, res) => {
  res.status(200).json({
    status: "success"
    //   data: {
    //     tours: tours
    //   },
    //   results: tours.length
    // });
  });
};

exports.getAtour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: "success"
  });
};

exports.createTour = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success"
  });
  // const newId = tours[tours.length - 1].id + 1;

};

exports.updateTour = (req, res) => {
  console.log(req.body);

  // const newId = tours[tours.length - 1].id + 1;
  // const newTour = Object.assign({ id: newId }, req.body);

  res.status(201).json({
    status: "success"
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null
  });
};
