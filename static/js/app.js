var restaurantList = [
  {
    name : "Da Paolo ....",
    link : "http://www.dapaolo.ch",
    type : "italian"
  },
  {
    name : "Inglewood ....",
    link : "http://inglewood.ch",
    type : "italian"
  },
  {
    name : "Tartare & Co. ....",
    link : "http://tartareandco.ch",
    type : "french"
  },
  {
    name : "Brasserie Lipp ....",
    link : "http://www.brasserie-lipp.com",
    type : "american"
  },
  {
    name : "Luigia ....",
    link : "http://luigia.ch",
    type : "chineese"
  }
];



console.log("restaurant list created");


var ViewModel = {
  listOfRestaurants: ko.observableArray ( restaurantList )
};

ko.applyBindings(ViewModel);
