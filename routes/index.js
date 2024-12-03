const routes = require("express").Router();
const myController = require("../controllers");

routes.get("/", myController.testFunction);
routes.get("/test", myController.routeCheck);

module.exports = routes;
