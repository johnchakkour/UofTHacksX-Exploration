//const { jsonData, addMarkers } = require('./jsonEventData');
//import { jsonData, addMarkers } from './jsonEventData';

var map = L.map('map')

function defaultMapSetUp(){
    map.setView([43.6629, -79.3903], 16);
    googleMap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
    
    googleMap.addTo(map)
    }
    
function perciseMapSetUp(position){
    
}
    
defaultMapSetUp()

//CUSTOM CONTENT

    

//green marker


//Party icon
var iconOptions = {
    iconUrl: 'partyPointer.png',
    iconSize: [30, 80] 
}
var customIcon = L.icon(iconOptions);
var markerOptions = {
    icon: customIcon,
}

//ADDING MARKERS

var jsonData = [
    {
      "LAT":43.6629,
      "LNG":-79.3904,
      "NAME": "Party Number 1",
      "DISCRIPTION": "Party at my House!"
    },
    {
      "LAT":43.6629,
      "LNG":-79.3907,
      "NAME": "Karaoke Night",
      "DISCRIPTION": "Party at my House!"
    }]
    
function addToData(latitude, longitude, name, discription){
    jsonData.push({
        "LAT":latitude,
        "LNG":longitude,
        "NAME": name,
        "DISCRIPTION": discription,
    })
}

var addMarkers = function(point) {
    L.marker([point.LAT, point.LNG])
      .addTo(map)
      .bindPopup(template1);
      
  };
  
addToData(43.6627, -79.3907, "Concert", "Concert tonight BYOB");
console.log(jsonData)
jsonData.forEach(addMarkers);



L.marker([43.6629, -79.3903]).addTo(map)
    .bindPopup('Party at myHall SUIIII')

map.on('geosearch_showlocation', function (result) {
    L.marker([result.x, result.y]).addTo(map)
});


/* On click add pointer prototype
map.on('click', addMarker);

function addMarker(e){
    // Add marker to map at click location; add popup window
    var newMarker = new L.marker(e.latlng).addTo(map);
}
*/
/*
var addMarkers = function(map) {
    for (var point in jsonData) {
       L.marker([jsonData[point].LAT, jsonData[point].LNG])
          .addTo(map)
    }
}
*/