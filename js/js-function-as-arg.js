// // Function as args in JS 
// // ======================

// const addNums = (a, b) => {
//     console.log(a + b);
// };

// addNums(10, 20); // 30 
// const x = 5;
// const y = 6;
// addNums(x, y); // 11

// const fun = (arg) => {
//     console.log('fun function called.');
//     // console.log(arg - 1);
//     // console.log(`Hi ${arg}!`);
//     // console.log(arg.city);
//     arg();
// };

// // fun(10);
// // fun('Sonu');
// // fun({ pin: 500001 });
// fun(() => { console.log('abc'); });




const fun = (arg) => {
    console.log('fun function called.');
    arg();
};

fun(() => { console.log('anonymous function called.'); });

const passedFun = () => { console.log('named function called.'); };
fun(passedFun);


