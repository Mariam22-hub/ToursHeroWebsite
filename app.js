////
/**
 * // Routing refers to determining how an application responds to a client request to a particular endpoint,
 // which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). In simple terms,
 // Routing allows targeting different routes or different URLs on our page.

 ///////

 *
 * ////
 * You can create chainable route handlers for a route path by using app.route().
 * Because the path is specified at a single location, creating modular routes is helpful,
 * as is reducing redundancy and typos. For more information about routes,
 *
 * //////
 * A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,”
 * capable only of performing middleware and routing functions. Every Express application has a built-in app router.

 * A Router doesn't .listen() for requests on its own. It's useful for separating your application into multiple modules
 * -- creating a Router in each that the app can require() and .use() as middleware
 *
 A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument
 to another router’s use() method.

 The top-level express object has a Router() method that creates a new router object.

 Once you’ve created a router object, you can add middleware and HTTP method routes
 (such as get, put, post, and so on) to it just like an application.
 *
 * Use the express.Router class to create modular, mountable route handlers.
 * A Router instance is a complete middleware and routing system; for this reason,
 * it is often referred to as a “mini-app”.
 *
 */

{
  const express = require("express");
  const app = express();
  const tourRouter = require("./routes/tourRoutes");
  const userRouter = require("./routes/userRoutes");
  const morgan = require("morgan");
  // const { createTour, updateTour } = require("../after-section-06/controllers/tourController");

  //middlewares
  app.use(express.json());
  app.use(express.static(`${__dirname}/public`));

  app.use((req, res, next) => {
    console.log("middleware");
    next();
  });
  app.use(morgan("dev"));

  //mini apps
  app.use("/api/v1/tours", tourRouter);
  app.use("/api/v1/users", userRouter);

  //ROUTES' HANDLERS

  // app.get("/api/v1/tours", getTours());

  // app.get("/api/v1/tours/:id", getAtour());

  // app.post("/api/v1/tours", createTour());

  // app.patch("/api/v1/tours/:id", updateTour());

  // app.delete("/api/v1/tours/:id", deleteTour());

  /////////////////////////////////////////////////////////////////////////

  module.exports = app;
}
