// // The classic callback pattern
// import { readFile } from 'fs'

// console.log('1. Starting...')

// readFile('./sample.txt', 'utf8', (err, data) => {
//     if (err) throw err
//     console.log('3. File contents:', data)
// })

// console.log('2. File request sent!')
// // Output order: 1, 2, 3


// // // // // node-topics.js

// // // const employee = {
// // //     id: 101,
// // //     name: 'Sonu',
// // //     salary: 10.25
// // // };

// // // console.log(Object.keys(employee));
// // // // ["id", "name", "salary"]

// // // const arr = [22, 9, 30, 25, 17];

// // // // const nums = ??;
// // // // const nums = arr.splice(1, 1);
// // // const nums = arr.filter(n => n % 2 == 0);

// // // console.log(nums);
// // // // [22, 30]


// // // buggy.js
// // function getUserAge(user) {
// //     return user.profile.age;   // user.profile might be undefined!
// // }

// // const user = { name: 'Rahul' };  // no profile!
// // console.log(getUserAge(user));

// fetch().then().then().catch();

// axios.get().then().catch();

// Streams — Handling Big Data
// Streams let you process data chunk by chunk instead of loading it all into memory.



import { readFileSync, createReadStream, createWriteStream } from 'fs'

// Bad for large files: loads EVERYTHING into memory
const data = readFileSync('huge-file.txt', 'utf8')

// Good: processes chunk by chunk
const readStream = createReadStream('huge-file.txt', 'utf8')
const writeStream = createWriteStream('output.txt')

readStream.on('data', (chunk) => {
    console.log('Got chunk of', chunk.length, 'characters')
})

readStream.on('end', () => {
    console.log('Done reading!')
})

// Or pipe: read → write
createReadStream('input.txt').pipe(createWriteStream('output.txt'))