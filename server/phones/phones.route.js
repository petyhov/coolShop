const { Router } = require("express");
const phoneController = require("./phones.controllers");

const phonesRouter = Router();

phonesRouter.get("/", phoneController.getPhones);

module.exports = phonesRouter;
