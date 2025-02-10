// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"

"use strict";
const str = "This is a demo String find the largest word from it";
const str2 = "This is a demo String find the largest / longest word from it";

function findLongestWord(str) {
  let longestWord = [];
  let longestLength = 0;
  let word = "";
  let words = []; 
  for (let i = 0; i <= str.length; i++) {
    if (i < str.length && str[i] !== " " && str[i] !== "/") {
      word += str[i]; 
    } 
    else {
      if (word.length > 0) {
        words[words.length] = word; 
        word = "";
      }
    }
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longestLength = words[i].length;
      longestWord = [words[i]]; 
    } 
    else if (words[i].length === longestLength) {
      longestWord[longestWord.length] = words[i]; 
    }
  }
  return longestWord;
}

console.log(findLongestWord(str)); 
console.log(findLongestWord(str2)); 



