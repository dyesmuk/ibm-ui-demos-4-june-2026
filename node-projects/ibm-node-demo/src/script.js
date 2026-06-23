// // // script.js

// // imports and exports 
// // ===================
// // 1. 
// // import addNums from "./calc.js";

// // console.log('node project');
// // const output = addNums(10, 20);
// // console.log(output);

// // 2. 
// // import { addNums, subNums } from "./calc.js";

// // console.log('node project');
// // const output = addNums(10, 20);
// // console.log(output);

// // console.log(subNums(10, 5));

// // 3. 
// // import { addNums, subNums } from "./calc.js";

// // console.log('node project');
// // const output = addNums(10, 20);
// // console.log(output);

// // console.log(subNums(10, 5));

// // 4.
// import calc from "./calc.js";

// console.log('node project');
// const output = calc.addNums(10, 20);
// console.log(output);

// console.log(calc.subNums(10, 5));


// File System and CLAs 
// ====================

// fs module in NodeJS 


import { readFileSync, readFile } from 'fs';

// const data = readFileSync('./src/sample.txt', 'utf8');
// console.log(data);

readFile('./src/sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message)
        return
    }
    console.log(data)
})

console.log('This runs BEFORE the file is read! (async)')
