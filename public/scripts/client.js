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

  // Deals with event form appearance/disappearance
  $('#write-new-event').click(function() {
    // format by row: optional h5 for any error message then textarea then submit button and character count
    const form = $("<h5 id='errMess'></h5> <textarea name='text' id='event-details' placeholder='What are you thinking of planning?'></textarea><div><button type='submit' id='new-event-sub'>Event</button></div>");
    $('#new-event').html(form);
  });



  // Deals with event form appearance/disappearance
  $('#filter-events').click(function() {
    // format by row: optional h5 for any error message then textarea then submit button and character count
    const form = $("<h5>Filter Event Pop up</h5>");
    $('#filter').html(form);
  });

  // Deals with event form appearance/disappearance
  $('#search-events').click(function() {
    // format by row: optional h5 for any error message then textarea then submit button and character count
    const form = $("<h5>Search Event Pop up</h5>");
    $('#search').html(form);
  });

  // Deals with event form appearance/disappearance
  $('#log-in').click(function() {
    // format by row: optional h5 for any error message then textarea then submit button and character count
    const form = $("<h5>Log in Event Pop up</h5>");
    $('#log-in-form').html(form);
  });

  // When login form is submitted
  $('#new-event').submit(function() {
    
  });
});

