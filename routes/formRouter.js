const { Router } = require("express");

const formRouter = Router();

const { addMessage } = require("../db/queries");

formRouter.get("/", (_req, res) => res.render("form"));
formRouter.post("/", (req, res) => {
	const { message, author } = req.body;
	addMessage(message, author);
	res.redirect("/");
});

module.exports = formRouter;
