const { Router } = require("express");
const ordersControllers = require("./orders.controllers");

const ordersRouter = Router();

ordersRouter.post("/", ordersControllers.addOrder);

module.exports = ordersRouter;
