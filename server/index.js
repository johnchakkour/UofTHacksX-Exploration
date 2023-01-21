"use strict";

// Basic express setup:

const PORT = 9090;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = require("./lib/in-memory-db");

const DataHelpers = require("./lib/data-helpers.js")(db);

const eventsRoutes = require("./routes/events")(DataHelpers);

app.use("/events", eventsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
