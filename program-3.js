// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

"use strict";
const obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};

const flattenObject = (obj) => {
  let result = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      let temp = flattenObject(obj[i]);
      for (let j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

console.log(flattenObject(obj));
