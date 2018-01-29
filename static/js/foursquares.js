// Find Restaurants

function findARestaurant(findLocation) {
  request(findLocation);
}


const request = async (findLocation) => {

  var $restaurantList = $('#restaurantList')
  // request restaurant list
  await fetch('https://api.foursquare.com/v2/venues/explore?near=' + findLocation + '&section=food' +
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
        restaurantList.length = 0;
        for (var i = 0; i < resultNumbers; i++) {

          self.locationSinglePoint =  new google.maps.LatLng(data.response.groups[0].items[i].venue.location.lat,
            data.response.groups[0].items[i].venue.location.lng);

          restaurantList.push({name: data.response.groups[0].items[i].venue.name});
          ViewModel.listOfRestaurants.push(new Restaurant(data.response.groups[0].items[i].venue.name));
          setMarker(locationSinglePoint, i, data.response.groups[0].items[i].venue.name);

        }

        //console.log(restaurantList[0])
        console.log("4 square view model");
        console.log(restaurantList);
        ViewModel();
      });
    })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
