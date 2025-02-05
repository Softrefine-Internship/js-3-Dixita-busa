// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

"use strict";
let arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

const countOccurrencesOfNames = (arr) => {
  let nameCount = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < nameCount.length; j++) {
      if (nameCount[j].employeeName === arr[i].employeeName) {
        nameCount[j].occurrences += 1;
        found = true;
        break;
      }
    }
    if (!found) {
      nameCount.push({ employeeName: arr[i].employeeName, occurrences: 1 });
    }
  }
  return nameCount;
};

console.log(countOccurrencesOfNames(arr));
