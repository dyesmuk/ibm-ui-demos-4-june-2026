// calc.js

// 1. only one export 
// const addNums = (a, b) => {
//     return a + b;
// };

// export default addNums;

// 2. many exports  

// const addNums = (a, b) => {
//     return a + b;
// };

// const subNums = (a, b) => {
//     return a + b;
// };

// export { addNums, subNums };

// 3. many exports  

// export const addNums = (a, b) => {
//     return a + b;
// };

// export const subNums = (a, b) => {
//     return a + b;
// };


// 4. one export object   

export const calc = {
    addNums: (a, b) => {
        return a + b;
    },

    subNums: (a, b) => {
        return a + b;
    }
}
