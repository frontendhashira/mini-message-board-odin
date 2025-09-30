const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
const connectionString = process.env.DATABASE_URL;
module.exports = new Pool({ connectionString });
