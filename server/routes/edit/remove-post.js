// Ignore for now
"use strict";

const express = require('express');
const appRoutes = express.Router();

appRoutes.get("/edit", function(req, res) {
  res.send('You came to remove/edit a post');
});