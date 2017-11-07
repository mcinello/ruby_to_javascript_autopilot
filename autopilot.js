function getNewCar() {
  return {
    "city": "Toronto",
    "passengers": 0,
    "gas": 100
  }
}

var cars = []

function addCar(cars, carPassedIn) {
  cars.push(carPassedIn)
  return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}

function pickUpPassenger(car) {
  car["passengers"] += 1;
  car["gas"] -= 10;
  return "Picked up passenger. Car now has " + car["passengers"] + " passengers.";
}

function getDestination(car) {
  if (car["city"] === 'Toronto') {
      return "Mississauga";
  } else if (car["city"] === 'Mississauga') {
      return "London";
  } else if (car["city"] === 'London') {
      return "Toronto";
  }
}

function fillUpGas(car) {
  var oldGas = car["gas"];
  car["gas"] = 100;
  return "Filled up to " + car["gas"] + " on gas from " + getGasDisplay(oldGas)
}

function getGasDisplay(gasAmount) {
  return gasAmount;
}

function drive(car, city_distance) {
  if (car["gas"] < city_distance) {
    return fillUpGas(car);
  }

  car["city"] = getDestination(car);
  car["gas"] -= city_distance;
  return "Drove to " + car["city"] + ". Remaining gas: " + getGasDisplay(car["gas"]);
}

function dropOffPassengers(car) {
  var previousPax = car["passengers"];
  car["passengers"] = 0;
  return "Dropped off " + previousPax + " passengers.";
}

function act(car) {
    var distanceBetweenCities = 50

    if (car["gas"] < 20) {
      return fillUpGas(car);
    } else if (car["passengers"] < 3) {
      return pickUpPassenger(car);
    } else {
      if (car["gas"] < distanceBetweenCities) {
      }
      var droveTo = drive(car, distanceBetweenCities);
      var paxDropped = dropOffPassengers(car);
      return droveTo + paxDropped;
    }
}

function commandFleet(cars) {
  for (var i = 0; i < cars.length; i++) {
    var action = act(cars[i]);
    console.log("Car " + (i+1) + ": " + action);
  }
  console.log("---");
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    var result = addCar(cars, newCar);
    console.log(result);
    commandFleet(cars);
  }
}



addCar(cars, getNewCar());
console.log(cars);
pickUpPassenger(cars[0]);
console.log(cars);
getDestination(cars[0]);
fillUpGas(cars[0]);
drive(cars[0], 20);
dropOffPassengers(cars[0]);
act(cars[0]);
commandFleet(cars);
console.log("----------------------");
addOneCarPerDay(cars, 10)
