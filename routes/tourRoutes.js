const express = require("express");

const controller = require("./../controllers/tourControllers");
const router = express.Router();

// router.param("id", controller.checkID);

router.route("/").get(controller.getTours).post(controller.createTour);
router.route("/:id").get(controller.getAtour).patch(controller.updateTour).delete(controller.deleteTour);

module.exports = router;
