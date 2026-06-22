// // Functions in JS 
// // ===============


// // Old JS function
// function fun1() {
//     console.log('fun1 function called.');
// }

// fun1();

// // Modern JS function == preferred choice 
// const fun2 = () => {
//     console.log('fun2 function called.');
// };

// fun2();

// const fun3 = () => {
//     console.log('fun3 called.');
//     // return 'some return value';
// };

// const output = fun3();
// console.log(output); // undefined 

// const addNums = (a, b) => {
//     console.log(a + b);
// };

// addNums(); // NaN 
// addNums(10); // NaN 
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30


// const addNums = (a, b = 5) => {
//     console.log(a + b);
// };

// addNums(); // NaN 
// addNums(10); // 15 
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30

// const addNums = (a = 4, b = 5) => {
//     console.log(a + b);
// };

// addNums(); // 9
// addNums(10); // 15 
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30


