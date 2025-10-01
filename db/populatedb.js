#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages  (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message TEXT,
  author VARCHAR (255) NOT NULL,
	added TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO messages (message, author) VALUES ('The only weapon we have is our memories.', 'Kenji Endō');
INSERT INTO messages (message, author) VALUES ('A man who betrays his friends is lower than scum', 'Shogun');
INSERT INTO messages (message, author) VALUES ('In the 21st century, mankind will be in danger… but I will save them.', 'Friend');
`;

const connectionString = process.env.DATABASE_URL;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString,
		ssl: {
			rejectUnauthorized: false, // required for Railway sometimes
		},
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
