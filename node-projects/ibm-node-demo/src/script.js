// // // // script.js

// // // imports and exports 
// // // ===================
// // // 1. 
// // // import addNums from "./calc.js";

// // // console.log('node project');
// // // const output = addNums(10, 20);
// // // console.log(output);

// // // 2. 
// // // import { addNums, subNums } from "./calc.js";

// // // console.log('node project');
// // // const output = addNums(10, 20);
// // // console.log(output);

// // // console.log(subNums(10, 5));

// // // 3. 
// // // import { addNums, subNums } from "./calc.js";

// // // console.log('node project');
// // // const output = addNums(10, 20);
// // // console.log(output);

// // // console.log(subNums(10, 5));

// // // 4.
// // import calc from "./calc.js";

// // console.log('node project');
// // const output = calc.addNums(10, 20);
// // console.log(output);

// // console.log(calc.subNums(10, 5));


// // File System and CLAs 
// // ====================

// // fs module in NodeJS 


// import { readFileSync, readFile } from 'fs';

// // const data = readFileSync('./src/sample.txt', 'utf8');
// // console.log(data);

// readFile('./src/sample.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err.message)
//         return
//     }
//     console.log(data)
// })

// console.log('This runs BEFORE the file is read! (async)')


// Asynchronous (non-blocking) — preferred for servers

// Reading Files
// ============= 

import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

// Synchronous (blocking) — simple but blocks the event loop
const data = fs.readFileSync('./src/notes.txt', 'utf8');
console.log(data);

// Asynchronous (non-blocking) — preferred for servers
fs.readFile('./src/notes.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log(data);
})
console.log('This runs BEFORE the file is read! (async)');

// Writing Files
// ============= 

// write-file.js

// Overwrite (or create) a file
fs.writeFileSync('./src/output.txt', 'Hello, file system! 📁');
console.log('File written!');

// Append to a file
fs.appendFileSync('./src/output.txt', '\nSecond line added.');
console.log('Appended!');

fs.writeFile('./src/log.txt', 'Server started at ' + new Date().toISOString(), (err) => {
    if (err) throw err
    console.log('Log written!');
})

// Async file write
// ================


fs.writeFile('./src/log.txt', 'Server started at ' + new Date().toISOString(), (err) => {
    if (err) throw err
    console.log('Log written!');
})

// Checking if a File Exists

// Modern way
if (fs.existsSync('./config.json')) {
    const config = fs.readFileSync('./config.json', 'utf8');
    console.log(JSON.parse(config));
} else {
    console.log('Config file not found — using defaults');
}
// Working with Directories
// ======================== 


// // Create a directory
// fs.mkdirSync('./data', { recursive: true })  // recursive: true won't throw if exists

// // List files in a directory
// const files = fs.readdirSync('./')
// console.log('Files:', files)

// // Delete a file
// fs.unlinkSync('./temp.txt')  // throws if file doesn't exist

// // Rename / move a file
// fs.renameSync('./old.txt', './new.txt'); 

// The path Module 
// =============== 


// Join paths safely (cross-platform)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'users.json');
console.log(filePath)  // /project/data/users.json

// Get parts of a path
const fullPath = 'D:/Projects/ibm-4-jun-2026/ui-stuff/ibm-ui-demos-4-june-2026/node-projects/ibm-node-demo/package.json';
console.log(path.basename(fullPath))   // app.js
console.log(path.dirname(fullPath))    // /home/user/project
console.log(path.extname(fullPath))    // .js
console.log(path.parse(fullPath))
// { root: '/', dir: '/home/user/project', base: 'app.js', ext: '.js', name: 'app' }


const [, , ...args] = process.argv;

console.log(args);
