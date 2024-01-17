const add = function() {
  var arglength = arguments.length
  var sum = 0;
  for (let i = 0; i <= arglength; i++) {
    if (Number.isInteger(arguments[i])) {
      sum = sum + arguments[i];
    }
  }
  return sum;
};

const subtract = function() {
  var arglength = arguments.length
  var sum = 0;
  for (let i = 0; i <= arglength; i++) {
    if (Number.isInteger(arguments[i])) {
      if (sum == 0) {
        sum = ((sum - arguments[i]) * -1);
      }
      else {
        sum = sum - arguments[i];
      }
    }
  }
  return sum;
};

const sum = function() {
	var array = arguments[0];
  var arrLength = array.length;
  var sum = 0;
  for (let i = 0; i <= arrLength; i++) {
    if (Number.isInteger(array[i])) {
      sum = sum + array[i];
    }
  }
  return sum;
};

const multiply = function() {
	var array = arguments[0];
  var arrLength = array.length;
  var sum = 0;
  for (let i = 0; i <= arrLength; i++) {
    if (Number.isInteger(array[i])) {
      if (sum == 0) {
        sum = (sum + array[i]);
      }
      else {
        sum = sum * array[i];
      }
    }
  }
  return sum;
};

const power = function(x, y) {
	return Math.pow(x, y)
};

const factorial = function(x) {
  var factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial = factorial * i;
  }
  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
