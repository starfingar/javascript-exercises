const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, n) => acc + n, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b);
};

const power = function(base, expoente) {
	return Math.pow(base, expoente);
};

const factorial = function(numero) {
	if (numero === 0 || numero === 1) return 1;  
  let resultado = 1;
  for (let i = numero; i > 1; i--) {
    resultado *= i;
  }
  
  return resultado;
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
