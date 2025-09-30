const pool = require("./pool");

async function retrieveAllMessages() {
	try {
		const result = await pool.query(`
			SELECT *
			FROM messages
			ORDER BY added DESC
		`);

		if (!result || !result.rows) {
			return [];
		}

		return result.rows;
	} catch (err) {
		console.error("Error retrieving all messages:", err);
		return [];
	}
}

async function getMessage(id) {
	if (!id) return [];
	try {
		const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
			id,
		]);
		if (!result || !result.rows || !result.rows[0]) return [];
		return result.rows[0];
	} catch (err) {
		console.error("Error retrieving message:", err);
		return [];
	}
}

async function addMessage(author, message) {
	try {
		await pool.query("INSERT INTO messages (author, message) VALUES ($1, $2)", [
			author,
			message,
		]);
		console.log("Message added successfully!");
	} catch (err) {
		console.error("Error adding message:", err);
		throw err;
	}
}

module.exports = {
	getMessage,
	retrieveAllMessages,
	addMessage,
};
