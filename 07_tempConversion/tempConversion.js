const convertToCelsius = function(fahrenheit) {
  let celsius;
  celsius = ( fahrenheit - 32) *5/9;
  celsius = Math.round(celsius * 10) / 10;
  //console.log(celsius);

  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit;
  fahrenheit = ( celsius * (9/5)) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  //console.log(fahrenheit);

  return fahrenheit;
};

//convertToCelsius(32)
//convertToFahrenheit(0)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
