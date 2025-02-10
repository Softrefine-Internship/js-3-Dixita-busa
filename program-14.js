// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

"use strict";
function countFrequency(str) {
  let frequency = {}; 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== " ") { 
      if (frequency[char] === undefined) {
        frequency[char] = 1; 
      } else {
        frequency[char] = frequency[char] + 1; 
      }
    }
  }

  let output = "{ ";
  let first = true;
  for (let key in frequency) {
    if (first === false) {
      output = output + ", ";
    }
    output = output + "'" + key + "': " + frequency[key];
    first = false;
  }
  output = output + " }";
  return output;
}

console.log(countFrequency("hello"));
console.log(countFrequency("Hello Jimmy"));

