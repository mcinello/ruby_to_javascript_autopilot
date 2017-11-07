function getNewCar() {
  var info = {
  "city": "Toronto",
  "passengers": 0,
  "gas": 100
  }
  console.log(info);
}
getNewCar()

var cars = []
function addCar(cars, new_car) {
  cars.push(new_car)
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + "." );
}
addCar(cars, "Ferrari")
