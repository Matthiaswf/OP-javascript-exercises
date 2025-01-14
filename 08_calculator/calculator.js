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

const power = function(a, b) {
  let sum = Math.pow(a, b);

	return sum;
};

const factorial = function(n) {
	let f = [];
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
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
