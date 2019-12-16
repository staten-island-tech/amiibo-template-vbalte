const path = require("path"); //take modules and put into ur own skript, template
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Thami likes bagels and butter. Also he smells");
});

app.get("/thamisucks", (req, res) => {
  res.send("Thami sucks. And yes u gotta do this while u eAT");
});

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
});

//127.0.0.1:3000
