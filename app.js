const express = require("express");
const app = express();
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messageRouter = require("./routes/messageInfoRouter");
const formRouter = require("./routes/formRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/message", messageRouter);
app.use("/new", formRouter);
app.use("/", indexRouter);
app.use((err, _req, res, _next) => {
	console.error(err);

	res.status(err.statusCode || 500).send(err.message);
});

const PORT = 8000;
app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`listening on port ${PORT}!`);
});
