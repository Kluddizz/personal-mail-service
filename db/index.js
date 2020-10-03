const fs = require("fs");
const { Pool } = require("pg");

const config = JSON.parse(fs.readFileSync(`${__dirname}/../postgres.json`));
const pool = new Pool(config);

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  close: () => pool.end(),
};
