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
];

let ans = {};
for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (ans[ele.name]) {
        ans[ele.name].push(ele.id);
    } else {
        ans[ele.name] = [ele.id];
    }
}

let output = "";
for (let key in ans) {
    output += `'${key}' => [ ${ans[key].join(", ")} ], `;
}

console.log("{",output.slice(0, -2),"}");