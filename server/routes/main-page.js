// Ignore for now
"use strict";

const express = require('express');
const appRoutes = express.Router();

appRoutes.get("/", function(req, res) {
  res.send('You cam to the main page');
});