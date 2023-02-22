const config = require("./config");

const mysql = require("mysql");
const connection = mysql.createConnection(config);

export function insert_name() {
  const sql = `INSERT INTO people(name) values('Guilherme')`;
  connection.query(sql);
  connection.end();
}
