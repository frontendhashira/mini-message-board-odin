const { Router } = require("express");

const appRouter = Router();

const { messages } = require("../db");

appRouter.get("/", (_req, res) => {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = appRouter;
