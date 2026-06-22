// Problem of async JS 

// const getData = (arg) => {
//     console.log('getData called');
//     arg({ city: 'Bengaluru' });
// };

// getData((data) => {
//     console.log('anonymous function called.');
//     console.log(data.city);
// });

// problem of async js 
// =====================

// const getData = () => {
//     console.log('getData called');
//     setTimeout(() => {
//         return { city: 'Bengaluru' };
//     }, 2000);
// };

// const output = getData();
// // const output = undefined;
// console.log(output.city);

// solution 1 - callback 
// =====================

const getData = (arg) => {
    console.log('getData called');
    setTimeout(() => {
        arg({ city: 'Bengaluru' });
    }, 2000);
};

getData((data) => {
    console.log('anonymous function called.');
    console.log(data.city);
});
