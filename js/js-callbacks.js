// Problem of async JS 

const getData = (arg) => {
    console.log('getData called');
    // fetched data 
    arg({ city: 'Bengaluru' });
};

getData(() => { });

