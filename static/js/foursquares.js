// Find Restaurants

function findARestaurant(findLocation, typeOfVenue) {
  request(findLocation, typeOfVenue);
}


const request = async (findLocation, typeOfVenue) => {
  console.log('Venue'+typeOfVenue);
  var $restaurantList = $('#restaurantList')
  // request restaurant list
  await fetch('https://api.foursquare.com/v2/venues/explore?near=' +
    findLocation + '&section=' + typeOfVenue +
    '&client_id=4YZCDEEWCHE5EZADR22BX5GKEHN1JTBEKLT21XSJXLT2GB4B' +
    '&client_secret=QRPFYHUAMOPAHW5I0GYVB2WMLRMKWOQVP5QXJUZDXZTBMYGQ' +
    '&v=20180121')
  .then(
    function(response) {

      self = this;

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        // limit results
        var resultNumbers = data.response.totalResults;
        if (resultNumbers > 20) {
          resultNumbers = 20
        }

        // go through the array and get the location coordinates and the name
        // restaurantList.length = 0;

        ViewModel.listOfRestaurants.removeAll();

        for (var i = 0; i < resultNumbers; i++) {

          self.locationSinglePoint =  new google.maps.LatLng(data.response.groups[0].items[i].venue.location.lat,
            data.response.groups[0].items[i].venue.location.lng);

          ViewModel.listOfRestaurants().push({ name: data.response.groups[0].items[i].venue.name,
              link: data.response.groups[0].items[i].venue.url});

          setMarker(locationSinglePoint, i, data.response.groups[0].items[i].venue.name);
        }

        ViewModel.listOfRestaurants.valueHasMutated();
        //console.log(ViewModel.listOfRestaurants());

      });
    })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
