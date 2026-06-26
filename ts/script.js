"use strict";
// // console.log('TS Hello world!');
// // // // java
// // // // int num = 10;
// let salary = 90000.25;
// console.log(salary);
// // salary = 'abc';
// // console.log(salary);
// salary = 98000.50;
// console.log(salary);
// Type notation in TS 
// =================== 
let salary; //   Variable 'salary' implicitly has an 'any' type
// let salary = 10.25; // type inference  
salary = 'abc'; // Type 'string' is not assignable to type 'number'.ts(2322)
console.log(salary);
