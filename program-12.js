// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

"use strict";
let arr = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
]

let arr2 = [
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
];

function findLongestWords(arr) {
  let longest = [arr[0]];
  let maxLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
          maxLength = arr[i].length;
          longest = [arr[i]]; 
      } else if (arr[i].length === maxLength) {
          longest[longest.length] = arr[i]; 
      }
  }
  return longest;
}

console.log(findLongestWords(arr)); 
console.log(findLongestWords(arr2)); 
