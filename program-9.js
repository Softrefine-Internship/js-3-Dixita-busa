// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

"use strict";
function generateAllCombinations(str) {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
}

console.log(generateAllCombinations("Dog".toLowerCase()));
