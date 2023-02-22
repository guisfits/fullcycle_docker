const express = require("express");
const app = express();
const port = 3000;

const database = require("./database");
database.connect();

const parser = require("./parser");

app.get("/", async (req, res) => {
  await database.insertName();

  const sql = await database.selectPeople();
  const html = parser.peopleToHtml(sql);

  const response = "<h1>Full Cycle Rocks!</h1> " + html;

  res.send(response);
});

app.listen(port, () => {
  console.log("listen on port " + port);
});
