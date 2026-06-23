// OOP in JS 

// const arr = [22, 9, 31, 25, 17];
// console.log(arr);

// const [a, b, c, d, e] = arr;
// console.log(a);

// // array destructuring == rest operator 

// const [a, b, ...remaining] = arr;
// console.log(a);
// console.log(b);
// console.log(remaining);

// spread operator 

const addNums = (...args) => {
    return args;
};

console.log(addNums(2, 3));
console.log(addNums(2, 3, 4));
console.log(addNums(2, 3, 4, 7));
console.log(addNums(2, 3, 4, 7, 1));





