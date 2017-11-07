var apples = 14;
console.log(apples);

console.log('I have ' + apples + ' apples');

var materials = ['wood', 'metail', 'stone'];

var words = {
  "elephant": "The world's largest land mammal.",
  "school": "A place of learning.",
  "ice cream": "A delicious milk-based dessert.",
};

var num = 16;
  if (num > 10) {
    console.log(num + " is greater than 10");
  } else if (num === 10) {
    console.log(num + " is exactly 10");
  } else {
    console.log(num + " must be less than 10");
  }

// 10 times do

var repeat = 10;
for (var i = 0; i < repeat; i++) {
  console.log("Doing the same thing over and over.");
}

// 20 times num + base (5)
function rep(num) {
  var base = 5;
  var repeat = 20;
  for (var i = 0; i < repeat; i++) {
    console.log(num + base);
  }
}
rep(10)

function accumulative(num) {
  var total = 0
  var repeat = 100
  for (var i = 0; i < repeat; i++) {
    total += num
  }
  console.log(total);
}
accumulative(1)


var containers = ['purse', 'wallet', 'backpack'];
for (var num = 0; num < containers.length; num++) {
  var item = containers[num];
  console.log(item);
}


function helloWorld() {
  return "Hello world!"
}
console.log(helloWorld())


function add(num1, num2) {
  return num1 + num2
}
var amount = add(5,7)
console.log(amount);
