//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output:
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

"use strict";
const arr = [
  { id: 1, name: "John", department: "HR" },
  { id: 2, name: "Alice", department: "IT" },
  { id: 3, name: "Bob", department: "Finance" },
  { id: 4, name: "Hank", department: "IT" },
];
const arrayObj = [
  { prop_1: "val_1", prop_2: "val_2", prop_3: [1, 2, 3] },
  { prop_1: "val_4", prop_2: "val_5", prop_3: { id: 1 } },
  { prop_1: "val_7", prop_2: "val_8", prop_3: () => "This is a function" },
];

const allEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null)
    return false;
  let keysA = Object.keys(a),
    keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !allEqual(a[key], b[key])) return false;
  }
  return true;
};

const filterObjects = (arr, key, value) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    let prop = arr[i][key];
    if ((typeof value === "function" && typeof prop === "function" && prop.toString() === value.toString()) || (typeof value === "object" && allEqual(prop, value)) || prop === value) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
console.log(filterObjects(arr, "department", "IT"));
console.log(filterObjects(arrayObj, "prop_3", [1, 2, 3]));
console.log(filterObjects(arrayObj, "prop_3", { id: 1 }));
console.log(filterObjects(arrayObj, "prop_3", () => "This is a function"));
