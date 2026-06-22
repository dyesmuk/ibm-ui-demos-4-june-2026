// Problem of async JS 

const getData = (arg) => {
    console.log('getData called');
    arg({ city: 'Bengaluru' });
};

getData((data) => {
    console.log('anonymous function called.');
    console.log(data.city);
});

