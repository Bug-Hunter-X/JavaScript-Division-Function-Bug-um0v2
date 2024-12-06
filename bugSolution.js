function myFunc(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error('Division by zero');
  } else if (a === 0) {
    return 0;
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Returns Infinity
console.log(myFunc(0, 5)); // Returns 0
console.log(myFunc(10, 5)); // Works correctly