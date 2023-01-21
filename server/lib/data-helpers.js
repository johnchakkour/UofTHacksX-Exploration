"use strict";

const simulateDelay = require("./util/simulate-delay");

module.exports = function makeDataHelpers(db) {
  return {

    // Saves an event to `db`
    saveEvent: function(newEvent, callback) {
      simulateDelay(() => {
        db.events.push(newEvent);
        callback(null, true);
      });
    },

    // Edits an event to `db`
    editEvent: function(editEvent, callback) {
      simulateDelay(() => {
        db.events.push(editEvent);
        callback(null, true);
      });
    },

    // Gets all events from `db`
    getEvents: function(callback) {
      simulateDelay(() => {
        callback(null, db.events);
      });
    }

  };
}
