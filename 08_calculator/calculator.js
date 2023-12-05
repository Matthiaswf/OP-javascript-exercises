const add = function(a, b) {
	
  return a += b;
};

const subtract = function(a, b) {

	return a -= b;
};

const sum = function(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

	return sumWithInitial;
};

const multiply = function(array) {
  let sum = 1;
    for (let i=0; i<array.length; i++) {
        sum = sum * array[i];
    }
     
    return sum;
};

const power = function() {
	
};

const factorial = function() {
	
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
