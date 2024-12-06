function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of 0
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Throws an error
console.log(myFunc(0, 5)); // Incorrectly returns 0
console.log(myFunc(10, 5)); // Works correctly