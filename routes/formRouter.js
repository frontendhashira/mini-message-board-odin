const { Router } = require("express");

const formRouter = Router();

const { createMessage } = require("../controllers/formController");

formRouter.get("/", (_req, res) => res.render("form"));
formRouter.post("/", createMessage);

module.exports = formRouter;
