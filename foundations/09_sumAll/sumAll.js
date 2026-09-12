function sumAll(a, b) {
  if (
    typeof a !== 'number' || 
    typeof b !== 'number' || 
    !Number.isInteger(a) || 
    !Number.isInteger(b) || 
    a < 0 || 
    b < 0
  ) {
    return 'ERROR';
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

module.exports = sumAll;
