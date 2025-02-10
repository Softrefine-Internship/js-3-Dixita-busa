// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

"use strict";
let arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
  { id: 5, name: { first: "Alice", last: "Smith" } },
  { id: 6, name: ["John", "Doe"] },
  {
    id: 7,
    name: function () {
      return "Dynamic Alice";
    },
  },
];

function convertToString(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    return value;
  }
  if (typeof value === "function") {
    return "Function:" + value;
  }
  if (typeof value === "object" && value !== null) {
    let isArray = false;
    for (let key in value) {
      if (key === "0") isArray = true;
    }
    if (isArray) {
      result += "Array:[";
      let first = true;
      for (let i = 0; value[i] !== undefined; i++) {
        if (!first) result += ", ";
        result += convertToString(value[i]);
        first = false;
      }
      result += "]";
    } else {
      result += "Object:{";
      let first = true;
      for (let key in value) {
        if (!first) result += ", ";
        result += key + ":" + convertToString(value[key]);
        first = false;
      }
      result += "}";
    }
  }
  return result;
}

let ans = {};
for (let i = 0; i < arr.length; i++) {
  let key = convertToString(arr[i].name);
  if (ans[key] !== undefined) {
    ans[key][ans[key].length] = arr[i].id;
  } else {
    ans[key] = [arr[i].id];
  }
}

let output = "{ ";
let first = true;
for (let key in ans) {
  if (!first) output += ", ";
  output += "'" + key + "' => [ ";
  let firstElement = true;
  for (let j = 0; ans[key][j] !== undefined; j++) {
    if (!firstElement) output += ", ";
    output += ans[key][j];
    firstElement = false;
  }
  output += " ]";
  first = false;
}
output += " }";

console.log(output);
