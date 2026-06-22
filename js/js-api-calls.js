






// Consume REST APIs using .then().catch() and async / await 

const apiUrl = 'https://jsonplaceholder.typicode.com/users/2';

// Consume REST APIs using .then().catch()
// =======================================

fetch(apiUrl)
    .then((response) => { return response.json() })
    .then((data) => { console.log(data); })
    .catch((error) => { console.error(error); });

// Consume REST APIs using async / await
// =======================================

const consumeRestApi = async () => {

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);

    }

};
consumeRestApi(); 