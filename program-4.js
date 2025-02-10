// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

"use strict";
const arrayObj = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
  },
];

const arrayObj2 = [
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
    prop_4: { id: 1 },
  },
  {
    prop_1: "val_7",
    prop_2: "val_8",
    prop_3: "val_9",
    prop_5: () => "This is a function",
  },
];

const allEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  let keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!keysB.includes(key) || !allEqual(a[key], b[key])) return false;
  }
  return true;
};

const indexOfObject = (arr, key, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (
      (typeof value === "function" && typeof arr[i][key] === "function" && arr[i][key].toString() === value.toString()) ||
      (typeof value === "object" && allEqual(arr[i][key], value)) ||
      arr[i][key] === value
    ) {
      return i;
    }
  }
  return -1;
};

console.log(indexOfObject(arrayObj, "prop_1", "val_4"));
console.log(indexOfObject(arrayObj2, "prop_1", "val_4")); 
console.log(indexOfObject(arrayObj2, "prop_4", { id: 1 })); 
console.log(indexOfObject(arrayObj2, "prop_5", () => "This is a function")); 