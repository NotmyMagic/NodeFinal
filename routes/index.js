const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.testFunction);
routes.get("/test", myController.routeCheck);
// books routes
routes.use("/books", require("./books"));

module.exports = routes;
