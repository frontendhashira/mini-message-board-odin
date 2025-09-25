const { Router } = require("express");
const messageInfoRouter = Router();
const { getMessageById } = require("../controllers/messageController");

messageInfoRouter.get("/:messageId", getMessageById);

module.exports = messageInfoRouter;
