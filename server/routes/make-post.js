// Ignore for now
"use strict";

const express = require('express');
const appRoutes = express.Router();

appRoutes.get("/add", function(req, res) {
  res.send('You came to make a post');
});