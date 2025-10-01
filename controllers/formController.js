const { body, validationResult } = require("express-validator");
const { addMessage } = require("../db/queries");

const validateMessage = [
	body("message", "Message is required").notEmpty().trim().escape(),
	body("author", "Author is required")
		.notEmpty()
		.trim()
		.escape()
		.isLength({ min: 3 })
		.withMessage("Message must be at least 3 characters long"),
];

const createMessage = [
	validateMessage,
	(req, res) => {
		const { message, author } = req.body;
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).render("form", {
				message,
				author,
				errors: errors.array(),
			});
		}

		addMessage(message, author);
		res.redirect("/");
	},
];

module.exports = {
	createMessage,
};
