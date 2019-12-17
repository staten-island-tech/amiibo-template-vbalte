const path = require("path"); //take modules and put into ur own skript, template
const express = require("express");
const app = express();

// define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

//setup handlebars engine and views location
app.set("views engine", "hbs"); //Telling express/NODE to use handlebars for templates
app.set("views", viewsPath); //telling express tp get templates from templates/views folder
app.get("", async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.status(500).send("Page not found");
  }
});

app.get("/thamisucks", (req, res) => {
  res.send("Thami sucks. And yes u gotta do this while u eAT");
});

app.listen(3000, (req, res) => {
  console.log("Listening on port 3000");
  console.log(__dirname);
});

//127.0.0.1:3000
