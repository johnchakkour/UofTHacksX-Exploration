"use strict";
const express = require('express');
const eventsRoutes = express.Router();

module.exports = function(DataHelpers) {

  eventsRoutes.get("/", function(req, res) {
    DataHelpers.getEvents((err, events) => {
      // Do something after getting all the events
    });
  });

  eventsRoutes.post("/", function(req, res) {
    // Get the events in the right format
    const event = '';
    DataHelpers.saveEvent(event, (err) => {
      // Do something after getting an event (ie. save it to database)
    });
  });

  return eventsRoutes;

};
