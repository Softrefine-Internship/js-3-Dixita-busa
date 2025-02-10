// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

"use strict";
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) 
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) 
      return false;
  }
  return true;
}

function containsAllValues(obj1, obj2) {
  for (let key in obj2) {
    if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
      if (!areArraysEqual(obj1[key], obj2[key])) 
        return false;
    } 
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const obj1 = { name: "John", age: 23, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };
console.log(containsAllValues(obj1, obj2));

const obj3 = { name: "John", degree: "CS" };
const obj4 = { name: "Max", age: 23, degree: "CS" };
console.log(containsAllValues(obj3, obj4));

const obj5 = { name: "Alice", skills:["Python", "JavaScript"], isActive: true };
const obj6 = { skills: ["Python", "JavaScript"], isActive: true };
console.log(containsAllValues(obj5, obj6));