var restaurantList = [
  {
    name : "restaurant 1 waiting to load....",
    link : ""
  },
  {
    name : "restaurant 2 waiting to load....",
    link : ""
  }
];
console.log("restaurant list created");
//console.log(restaurantList.length);

var Restaurant = function(data) {
   this.name = ko.observable(data.name);
}



var ViewModel = function () {
  var self = this;
  //this.currentRestaurant = ko.observable(new Restaurant ());
  //console.log('viewmodel');
  this.listOfRestaurants = ko.observableArray([]);
  //restaurantList = ko.observableArray([]);

  restaurantList.forEach(function(restaurantItem){
    self.listOfRestaurants.push(new Restaurant(restaurantItem));
    //console.log("list of restaurants ");
    //console.log(listOfRestaurants.name);
    //console.log(restaurantList.name);
    //console.log("enf of list");
  });

  //console.log(restaurantList);
  //console.log(restaurantList.length);
  //this.CurrentRestaurant = ko.observable(this.listOfRestaurants()[0]);

}
ko.applyBindings(ViewModel);

var viewModelType = {
    // These are the initial options
    // availableType: ko.observableArray(['Any','Italian', 'Chineese', 'Amerian'])
};
