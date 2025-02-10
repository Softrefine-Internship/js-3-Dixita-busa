// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

"use strict";
function generateAllCombinations(str) {
  let combinations = []; 
  let isUnique; 
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let substr = "";
      for (let k = i; k < j; k++) {
        substr += str[k];
      }
      isUnique = true;
      for (let m = 0; m < combinations.length; m++) {
        if (combinations[m] === substr) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        combinations[combinations.length] = substr;
      }
    }
  }
  return combinations;
}

console.log(generateAllCombinations("Dog"));    
console.log(generateAllCombinations("Jimmy"));  
