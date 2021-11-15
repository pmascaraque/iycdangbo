const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

server.post("/", (req, res) => {
  console.log(req.body);
  res.send("sending post");
});
