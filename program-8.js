// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:  
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output: 
// total value for "price": 1850
// total value for "quantity": 6

"use strict";
let arr = [
    {
        product: "Laptop",
        price: 1000,
        quantity: 2,
    },
    {
        product: "Phone",
        price: 600,
        quantity: 3,
    },
    {
        product: "Monitor",
        price: 250,
        quantity: 1,
    },
]

const calculateTotalValue = (arr, key) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i][key];
    }
    return total;
};

console.log('Total value for "price":', calculateTotalValue(arr, "price")); 
console.log('Total value for "quantity":', calculateTotalValue(arr, "quantity"));
