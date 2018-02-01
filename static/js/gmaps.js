// Declare variables
var map;
var markers = [];
var markerLocation;

// this function creates the map, and initializes the buttons to interact
// with the web page
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 46.2044, lng: 6.1432},
    zoom: 13
  });

  var city = {lat:46.2044, lng: 6.1432};
  markerLocation = new google.maps.Marker({
    position: city,
    map: map,
  });
  markers.push(markerLocation);

  var infowindow = new google.maps.InfoWindow({
    content: 'Info window text'
  });
  markerLocation.addListener('click', function() {
    infowindow.open(map, markerLocation);
  });

  //Find nearest restaurants
  findARestaurant('Geneva, Switzerland', 'art')

}

function typeOfVenue (typeOfVenue) {
  console.log(typeOfVenue);
  deleteMarkers();
  findARestaurant('Geneva, Switzerland', typeOfVenue)
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function setMarker (markerLocation, index, name) {
  var locationMarker = new google.maps.Marker({
    position: markerLocation,
    map: map,
    animation: google.maps.Animation.DROP,
  });
  markers.push(locationMarker);
  //console.log(locationMarker);

  var infowindow = new google.maps.InfoWindow({
    content: name
  });

  // CHange icon to green when mouse over
  locationMarker.addListener('mouseover', function() {
    infowindow.open(map, locationMarker);
    locationMarker.setIcon('https://www.google.com/mapfiles/marker_green.png');
  });

  // change icon to yellow to show it was looked at but not selected
  locationMarker.addListener('mouseout',function() {
    console.log("mouse " + index + name);
    infowindow.close(locationMarker);
    locationMarker.setIcon('https://www.google.com/mapfiles/marker_yellow.png');
  });

}
