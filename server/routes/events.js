"use strict";
const express = require('express');
const eventsRoutes = express.Router();

module.exports = function(DataHelpers) {

  eventsRoutes.get("/", function(req, res) {
    DataHelpers.getEvents((err, events) => {
      // Do something after getting all the events
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(events);
      }
    });
  });

  eventsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }
    // Get the events in the right format
    const event = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      time: req.body.time,
      day: req.body.day,
      picture: req.body.picture,
      cost: req.body.cost,
      category: req.body.category
    };
    DataHelpers.saveEvent(event, (err) => {
      // Do something after getting an event (ie. save it to database)
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send(event);
      }
    });
  });

  eventsRoutes.post("/edit", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }
    // Get the events in the right format
    const event = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      time: req.body.time,
      day: req.body.day,
      picture: req.body.picture,
      cost: req.body.cost,
      category: req.body.category
    };
    DataHelpers.editEvent(event, (err) => {
      // Do something after getting an event (ie. save it to database)
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send(event);
      }
    });
  });

  return eventsRoutes;

};
