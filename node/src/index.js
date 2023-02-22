const express = require("express");
const app = express();
const port = 3000;

const database = require("./database");

app.get("/", (req, res) => {
  database.insert_name();
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log("listen on port " + port);
});
