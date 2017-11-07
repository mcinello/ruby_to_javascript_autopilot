var getNewCar = {
  "city": "Toronto",
  "passengers": 0,
  "gas": 100
  }

var cars = []
function addCar(cars, getNewCar) {
  cars.push(getNewCar)
  console.log("Adding new car to fleet. Fleet size is now " + cars.length + "." );
}

function pickUpPassenger(car) {
  car["passengers"] += 1;
  car["gas"] -= 10;
  console.log("Picked up passenger. Car now has " + car["passengers"] + " passengers.");
}

addCar(cars, getNewCar);
console.log(cars);
// console.log(getNewCar());
pickUpPassenger(cars[0])
console.log(cars);
