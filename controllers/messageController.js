const CustomNotFoundError = require("../errors/CustomNotFoundError");
const { getMessage } = require("../db/queries");

const getMessageById = async (req, res) => {
	const { messageId } = req.params;

	const message = await getMessage(messageId);

	if (!message) throw new CustomNotFoundError("Message not found");

	res.render("message", {
		title: "Message Info",
		message: message,
	});
};

module.exports = { getMessageById };
