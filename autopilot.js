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

function getDestination(car) {
  if (car["city"] === 'Toronto') {
    console.log("Mississauga");
  } else if (car["city"] === 'Mississauga') {
    console.log("London");
  } else if (car["city"] === 'London') {
    console.log("Toronto");
  }
}

function fillUpGas(car) {
  var old_gas = car["gas"];
  car["gas"] = 100;
  console.log("Filled up to " + car["gas"] + " on gas from " + getGasDisplay(old_gas));
}

function getGasDisplay(gasAmount) {
  return gasAmount
}


addCar(cars, getNewCar);
console.log(cars);
pickUpPassenger(cars[0])
console.log(cars);
getDestination(cars[0])
fillUpGas(cars[0])
