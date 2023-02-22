const express = require("express");
const app = express()
const port = 3000;

// const database = require("./database")
// database.insert_name()

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log("listen on port " + port);
});
