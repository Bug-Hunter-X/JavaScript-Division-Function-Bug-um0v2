# JavaScript Division Function Bug

This repository demonstrates a common error in JavaScript: incorrect handling of zero values in division operations.

The `bug.js` file contains a function `myFunc` that attempts to divide two numbers. It incorrectly handles the case where either input is zero. This leads to incorrect results and potential runtime errors.

The `bugSolution.js` file provides a corrected version of the function that properly handles division by zero and cases with zero as input. 

## How to reproduce
1. Clone the repository.
2. Open `bug.js` in a JavaScript environment (browser console, Node.js).
3. Run the code. Observe the unexpected behaviour.
4. Open `bugSolution.js` to see the corrected implementation.

## Solution
The solution involves using a conditional statement to check if either `a` or `b` is equal to zero before performing the division. If either is zero, an appropriate action (returning a specific value or throwing an error) should be taken. The improved function properly handles these edge cases, preventing errors and providing accurate results.