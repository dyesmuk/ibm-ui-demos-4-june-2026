
// const getData = (arg) => {
//     console.log('getData called');
//     arg({ city: 'Bengaluru' });
// };

// getData((data) => {
//     console.log('anonymous function called.');
//     console.log(data.city);
// });

// // =====================
// // problem of async js 
// // =====================

// const getData = () => {
//     console.log('getData called');
//     setTimeout(() => {
//         return { city: 'Bengaluru' };
//     }, 2000);
// };

// const output = getData();
// // const output = undefined;
// console.log(output.city);

// // =====================
// // solution 1 - callback 
// // =====================

// console.log("Start");

// const getData = (arg) => {
//     console.log('getData called');
//     setTimeout(() => {
//         arg({ city: 'Bengaluru' });
//     }, 2000);
// };

// getData((data) => {
//     console.log('anonymous function called.');
//     console.log(data.city);
// });

// // ====================
// // solution 2 - Promise  
// // ====================

// console.log("Start");

// const getData = () => {
//     console.log('getData called');
//     const isDataAvailable = false; // true false 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDataAvailable)
//                 resolve({ city: 'Bengaluru' });
//             else
//                 reject({ message: 'Data not available' });
//         }, 2000);
//     });
// };

// getData()
//     .then((response) => { console.log(response.city); })
//     .catch((error) => { console.log(error.message); });


// // ==========================
// // solution 3 - Promise and async / await
// // ==========================

console.log("Start");

const getData = () => {
    console.log('getData called');
    const isDataAvailable = false; // true false 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDataAvailable)
                resolve({ city: 'Bengaluru' });
            else
                reject({ message: 'Data not available' });
        }, 2000);
    });
};

const consumeData = async () => {
    try {
        const data = await getData();
        console.log(data.city);
    }
    catch (error) {
        console.log(error.message);
    }
};

consumeData();




