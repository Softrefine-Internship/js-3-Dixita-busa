// Write a JavaScript program to check a given string checkString an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

"use strict";
function checkStringAnagram(str1, str2) {
  let cleanedStr1 = "",
    cleanedStr2 = "";
  for (let i = 0; i < str1.length; i++)
    if (str1[i] !== " ") cleanedStr1 += str1[i].toLowerCase();
  for (let i = 0; i < str2.length; i++)
    if (str2[i] !== " ") cleanedStr2 += str2[i].toLowerCase();

  if (cleanedStr1.length !== cleanedStr2.length) 
    return false;
  let count = {};

  for (let char of cleanedStr1) 
    count[char] = (count[char] || 0) + 1;
  for (let char of cleanedStr2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}

console.log(checkStringAnagram("evil", "vile"));
console.log(checkStringAnagram("a gentleman", "elegant man"));
console.log(checkStringAnagram("eleven plus two", "twelve plus one"));
