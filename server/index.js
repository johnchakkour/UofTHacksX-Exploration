// Set up the express web server and encryption
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const PORT = 8080; // default port 8080

// Main page
app.get("/", function(req, res) {
  res.send('You cam to the main page');
});

// Add an event
app.get("/add", function(req, res) {
  res.send('You came to make a post');
});

// Edit/remore an event
app.get("/edit", function(req, res) {
  res.send('You came to remove/edit a post');
});

// Start listening
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
