// Wrap out code to protect any data from being in global scope.
$(document).ready(function() {
  // Renders the events provided
  const renderEvents = function(events) {
  };

  // Returns a event element for the event provided
  const createEventElement = function(event) {
  };

  // Validates the event submitted
  const validate = function(eventInfo) {
  };

  // When an event is submitted
  $('form').submit(function(event) {

  });

  // Loads the events when page is visited/reloaded by user
  const loadEvents = function() {
  };

  loadEvents();

  // Deals with new event form appearance/disappearance
  $('#write-new-event').click(function() {
    $('#new-event').toggle();
  });

  // Deals with filter form appearance/disappearance
  $('#filter-events').click(function() {
    $('#filter').toggle();
  });

  // Deals with search form appearance/disappearance
  $('#search-events').click(function() {
    $('#search').toggle();
  });

  // Deals with ogin form appearance/disappearance
  $('#log-in-button').click(function() {
    $('#log-in-form').toggle();
  });

  // When login form is submitted
  $('#new-event-form').submit(function() {
    alert($('#event-name').val());
  });
});

