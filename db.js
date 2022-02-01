const { Pool } = require("pg");
require("dotenv").config();


const devConfig = {
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  port: process.env.PG_PORT,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  }
}

const client = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

client.connect();
module.exports = client;
