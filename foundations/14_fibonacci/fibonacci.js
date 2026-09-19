const fibonacci = function(value) {
  const number = parseInt(value, 10);
  if (number < 0) {
    return 'OOPS';
  }

  const sequencia = [0, 1];

  for (let i = 2; i <= number; i++) {
    let sum = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(sum);
  }

  return sequencia[number];
};

// Do not edit below this line
module.exports = fibonacci;
