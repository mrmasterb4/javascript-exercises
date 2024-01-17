const convertToCelsius = function(x) {
  var celsius = (x - 32) * (5/9);
  if (celsius % 1 == 0) {
    return celsius;
  }
  else {
    celsius = parseFloat(celsius.toFixed(1));
    return celsius;
  }
};

const convertToFahrenheit = function(y) {
  var farhenheit = (y * (9/5) + 32);
  if (farhenheit % 1 == 0) {
    return farhenheit;
  }
  else {
    farhenheit = parseFloat(farhenheit.toFixed(1));
    return farhenheit;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
