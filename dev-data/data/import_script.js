const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const app = require("./app");
const Tour = require("../../model/toursModels");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then((con) => {
    console.log(con.connections);
    console.log("connection successful");
  });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("data loaded");
    process.exit();

  } catch (e) {
    console.log(e);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("data deleted");
    process.exit();
    
  } catch (e) {
    console.log(e);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

// console.log(process.argv);