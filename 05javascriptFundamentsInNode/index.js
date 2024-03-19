let app = require('./app')
console.log(app);  // console.log(app.x);  // 20
console.log(app.x);  // 20
console.log(app.y);  // 30
console.log(app.z);  // [Function: z]
console.log(app.z());  // 10

// filter function

// The filter function in Node.js is used to create a 
// new array containing elements that pass a provided 
// test condition. It iterates over each element in an 
// array and returns a new array with only the elements 
// that meet the specified criteria.
// Filter even numbers from an array using the filter method in JavaScript.

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4]

const arr = [1, 2, 3, 4, 5 ,3 , 7 , 9, 8, 0];
let result = arr.filter((item)=>{
    return item >= 4
})
console.table(result);
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   4    │
// │    1    │   5    │
// │    2    │   7    │
// │    3    │   9    │
// │    4    │   8    │
// └─────────┴────────┘
