const { Router } = require("express");

const appRouter = Router();

const homePageController = require("../controllers/homeController");

appRouter.get("/", homePageController);

module.exports = appRouter;
