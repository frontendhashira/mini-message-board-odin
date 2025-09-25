const randomId = () => Math.random().toString(16).slice(2);

const messages = [
	{
		message: "Hi there!",
		author: "Amando",
		added: new Date(),
		_id: randomId(),
	},
	{
		message: "Hello World!",
		author: "Charles",
		added: new Date(),
		_id: randomId(),
	},
];

const getMessage = async (id) => messages.find((message) => message._id === id);

const addMessage = (message, author) => {
	const newMessage = {
		message,
		author,
		added: new Date(),
		_id: randomId(),
	};
	messages.unshift(newMessage);
	return newMessage;
};

module.exports = {
	messages,
	addMessage,
	getMessage,
};
