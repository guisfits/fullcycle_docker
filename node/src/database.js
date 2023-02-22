const mysql = require("mysql2/promise");

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const { config } = require("./config");
  const connection = await mysql.createConnection(config);

  console.log("Connected to MySQL!!!");

  global.connection = connection;
  return connection;
}

async function insertName() {
  await connection.query(`INSERT INTO people(name) values('guisfits');`);
}

async function selectPeople() {
  const [rows] = await connection.query(`SELECT * FROM people;`);
  return rows;
}

module.exports = { connect, insertName, selectPeople };
