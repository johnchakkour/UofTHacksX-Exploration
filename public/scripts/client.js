// Wrap out code to protect any data from being in global scope.
let mapInitialized = false;
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
    addToData($('#location').val(), $('#time').val(), $('#name').val(), $('#desc').val());
    addMarkers(jsonData[jsonData.length - 1]);
    // alert(`name: ${$('#name').val()} location: ${$('#location').val()} time: ${$('#time').val()} Desc: ${$('#desc').val()} category: ${$('#category').val()}`);
  });

  // When search form is submitted
  $('#search-form').submit(function() {
    alert(`Searched for: ${$('#search-bar').val()}`);
  });

  // When search form is submitted
  $('#login-form').submit(function() {
    alert(`Email: ${$('#email').val()} Password: ${$('#password').val()}`);
  });

  // Initialize the map
  let map = L.map('map');

  function defaultMapSetUp() {
    map.setView([43.6629, -79.3903], 15);
    googleMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    googleMap.addTo(map);
  }

  if (!mapInitialized) {
    defaultMapSetUp();
    mapInitialized = true;
  }

  // Method 1 for adding pointers
  //Template Infos
  let template_Madison =
    "<h3> The Madison </h3><p>Tonight: 2 dollar drinks and dancefloor open</p>";

  let template_GSU =
    "<h3> GSU Pub </h3><p>Tonight: Karaoke singing contest! Bring your best singing voice!</p>";

  let template_UofTHacks =
    "<h3> U of T Hacks </h3><p>55 St. George st: Best hackathon in the world! Games and lots of prizes to be won!</p>";

  let template_Nick =
    "<h3> Nick's House Party </h3><p>I'm having a party tonight at 70 St. Mary. Come by and say hello!</p>";

  let template_ROM =
    "<h3> Royal Ontario Museum New Exhibit </h3><p>Tonight at the Rom we're having a formal event come by and check out our new exhibit!</p>";

  let template_sport =
    "<h3> Soccer Drop In </h3><p>This evening at 5: Soccer drop in. Come by and join in on a friendly match from 5pm-8pm!</p>";

  let template_concert =
    "<h3> The Weeknd LIVE </h3><p>Come tonight to experiance The Weeknd LIVE! Doors open at 8pm. </p> <a href='https://www.theweeknd.com/'> Buy tickets Here</a>";

  L.marker([43.6678, -79.4033]).addTo(map)
    .bindPopup(template_Madison);

  L.marker([43.66082, -79.40032]).addTo(map)
    .bindPopup(template_GSU);

  L.marker([43.660880, -79.396820]).addTo(map)
    .bindPopup(template_UofTHacks);

  L.marker([43.667390, -79.390040]).addTo(map)
    .bindPopup(template_Nick);

  L.marker([43.6677, -79.3948]).addTo(map)
    .bindPopup(template_ROM);

  L.marker([43.6629, -79.3957]).addTo(map)
    .bindPopup(template_sport);

  L.marker([43.66461, -79.374118]).addTo(map)
    .bindPopup(template_concert);

  //Custom Markers Database
  let jsonData = [
    {
      "LAT": 43.6629,
      "LNG": -79.3904,
      "NAME": "Party Number 1",
      "DISCRIPTION": "Party at my House!"
    },
    {
      "LAT": 43.6629,
      "LNG": -79.3907,
      "NAME": "Karaoke Night",
      "DISCRIPTION": "Party at my House!"
    }];

  // Adding to database
  function addToData(latitude, longitude, name, discription) {
    jsonData.push({
      "LAT": latitude,
      "LNG": longitude,
      "NAME": name,
      "DISCRIPTION": discription,
    });

  }

  // Method 2 for adding pointers
  let addMarkers = function(point) {
    L.marker([point.LAT, point.LNG])
      .addTo(map)
      .bindPopup(`<h3> ${point.NAME}</h3><p>${point.DISCRIPTION}</p>`);
  };

  addToData(43.6627, -79.3907, "Concert", "Concert tonight BYOB");

  jsonData.forEach(addMarkers);
});

