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
  console.log("Filled up to " + car["gas"] + " on gas from " + getGasDisplay(oldGas));
}

function getGasDisplay(gasAmount) {
  return gasAmount;
}

function drive(car, city_distance) {
  if (car["gas"] < city_distance) {
    fillUpGas(car);
  }

  car["city"] = getDestination(car);
  car["gas"] -= city_distance;
  console.log("Drove to " + car["city"] + ". Remaining gas: " + getGasDisplay(car["gas"]));
}

function dropOffPassengers(car) {
  var previousPax = car["passengers"];
  car["passengers"] = 0;
  console.log("Dropped off " + previousPax + " passengers.");
}

function act(car) {
    var distanceBetweenCities = 50

    if (car["gas"] < 20) {
      return fillUpGas(car)
    } else if (car["passengers"] < 3) {
      return pickUpPassenger(car)
    } else {
      if (car["gas"] < distanceBetweenCities) {
        var droveTo = drive(car, distanceBetweenCities);
        var paxDropped = dropOffPassengers(car);
        console.log(droveTo + paxDropped);
      }
    }
}



addCar(cars, getNewCar);
console.log(cars);
pickUpPassenger(cars[0])
console.log(cars);
getDestination(cars[0])
fillUpGas(cars[0])
drive(cars[0], 20)
dropOffPassengers(cars[0])
act(cars[0])
