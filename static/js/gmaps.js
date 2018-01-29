// Declare variables
var map;
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

  var infowindow = new google.maps.InfoWindow({
    content: 'Info window text'
  });
  markerLocation.addListener('click', function() {
    infowindow.open(map, markerLocation);
  });

  //Find nearest restaurants
  findARestaurant('Geneva, Switzerland')

}



function setMarker (markerLocation, index, name) {
  var locationMarker = new google.maps.Marker({
    position: markerLocation,
    map: map,
    animation: google.maps.Animation.DROP,

  });
  //console.log(locationMarker);

  var infowindow = new google.maps.InfoWindow({
    content: name
  });
  locationMarker.addListener('mouseover', function() {
    infowindow.open(map, locationMarker);
    locationMarker.setIcon('https://www.google.com/mapfiles/marker_green.png');
  });

  locationMarker.addListener('mouseout',function() {
    console.log("mouse " + index + name);
    infowindow.close(locationMarker);
    locationMarker.setIcon('https://www.google.com/mapfiles/marker_yellow.png');
  });

}



function clearMarkers () {
  setMapOnAll(null);
}
