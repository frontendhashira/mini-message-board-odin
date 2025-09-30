const { retrieveAllMessages } = require("../db/queries");

async function getMessages(req, res) {
	const messages = await retrieveAllMessages();
	res.render("index", { title: "Mini Messageboard", messages });
}

module.exports = getMessages;
